import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoClose } from "react-icons/io5";

export default function LoginPage({ closeModal }) {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4000/auth/google"; // Replace with your backend's base URL
  };

  return (
    <div className="login_page">
      <div className="login_form">
        <button
          onClick={closeModal}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
        >
        <IoClose className="size-6"/>
        </button>
        <form className="space-y-6">
          <h1 className="text-2xl font-bold text-center text-black md:text-3xl">
            Welcome!!
          </h1>
          <p className="text-base">
            Ready to explore? Log in with Google and get started!
          </p>
          <p className="text-center text-gray-700 text-xs">
            New here? Sign up quickly with your Google account!
          </p>
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="google-btn flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded hover:shadow-md"
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
