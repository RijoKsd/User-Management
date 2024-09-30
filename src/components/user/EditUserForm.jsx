import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserDB } from "../../utils/db";
import toast from "react-hot-toast";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  location: yup.string().required("Location is required"),
  jobTitle: yup.string().required("Job title is required"),
});

const EditUserForm = ({ user, onClose, fetchUsers }) => {
  const { updateUser } = useUserDB();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: user.username,
      location: user.location,
      jobTitle: user.jobTitle,
    },
  });

  const onSubmit = async (data) => {
    try {
      await updateUser(user.id, data);
      toast.success("User updated successfully");
      onClose();
      fetchUsers();
    } catch (error) {
      toast.error("Error updating user: " + error.message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
      id="my-modal"
    >
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Edit User
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-2 text-left">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                {...register("username")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.username && (
                <p className="text-red-500 text-xs italic">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                {...register("location")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.location && (
                <p className="text-red-500 text-xs italic">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="jobTitle"
              >
                Job Title
              </label>
              <input
                {...register("jobTitle")}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-xs italic">
                  {errors.jobTitle.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Update
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserForm;
