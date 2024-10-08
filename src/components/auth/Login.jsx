import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserDB } from "../../utils/db";
import bcrypt from "bcryptjs";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { getAllUsers, updateLastLogin } = useUserDB();
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const users = await getAllUsers();
      //decrypt password
      const user = users.find((user) => user.email === email);
       if (!user) {
        throw new Error("Invalid email");
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        throw new Error("Incorrect password");
      }

      if (user.isBlocked) {
        throw new Error("User is blocked");
      }

      // localstorage
      localStorage.setItem("isLoggedIn", true);

      await updateLastLogin(user.id);

      toast.success("Login successful");
      navigate("/user");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            {...register("password")}
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-4">
        Don&#39;t have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
