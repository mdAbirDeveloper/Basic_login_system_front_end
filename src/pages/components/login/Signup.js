import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [showPassword, setShowpassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const togglePasswordVisibility = () => {
    setShowpassword(!showPassword);
  };
  const onSubmit = async (data) => {
    setLoading(true);
    setMessage(null); // Reset message before submitting

    try {
      // Send data to the API
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setLoading(false);
      if (response.ok) {
        // Store user data (without password) in localStorage
        const { password, ...userData } = data;
        localStorage.setItem("user", JSON.stringify(userData));
        router.reload();
        setMessage("Signup successful!");
      } else {
        setMessage(result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      setLoading(false);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Input */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              {...register("phone", { required: "Phone is required" })}
              placeholder="Enter your phone number"
              className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute text-2xl right-3 top-12 transform -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
            >
              <p className="mt-2">{showPassword ? "🙈" : "👁️"}</p>
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <p>{message}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
          >
            {loading ? "......." : "Sign Up"}
          </button>
          <div>
            <p>Already have an account? <Link className="text-blue-700" href={"/components/login"}>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
