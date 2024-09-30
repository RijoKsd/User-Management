// src/components/Hero.js
import { Link } from "react-router-dom";
import bannerImage from "/banner.jpg"; // Ensure the path is correct

const Hero = () => {
  return (
    <section
      className="bg-gray-100 text-gray-800 py-20 h-screen"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-8 rounded">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to UserFlow
        </h1>
        <p className="text-lg text-white mb-6">
          Seamless user management made simple and efficient.
        </p>
        <Link
          to="/login"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Login to Your Account
        </Link>
      </div>
    </section>
  );
};

export default Hero;
