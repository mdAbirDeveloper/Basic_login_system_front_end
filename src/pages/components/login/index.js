import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showPassword, setShowpassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowpassword(!showPassword);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setLoading(false);

      if (response.ok) {
        // Store user data (excluding password) in local storage
        const { name, email, phone } = result.user;
        localStorage.setItem("user", JSON.stringify({ name, email, phone }));
        setMessage("Login successful!");
        router.reload();
      } else {
        setMessage(result.message || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Display message */}
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email/Phone Input */}
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-medium">
              Email or Phone
            </label>
            <input
              type="text"
              id="emailOrPhone"
              {...register("emailOrPhone", { required: true })}
              placeholder="Enter your email or phone"
              className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="flex justify-between">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                placeholder="Enter your password"
                className="w-full mt-2 p-3 rounded-md bg-gray-900 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <div className="mt-5 absolute right-4">
                <p onClick={togglePasswordVisibility}>
                  {showPassword ? "👁️" : "🙈"}
                </p>
              </div>
            </div>
          </div>

          {/* Login Button */}
          {user ? (
            <button
              disabled
              className="w-full py-3 bg-blue-300 text-white font-semibold rounded-md transition"
            >
              Already Login
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          )}
        </form>

        {/* Additional Options */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Dont have an account?{" "}
            <Link
              className="text-blue-500 hover:underline"
              href={"/components/login/Signup"}
            >
              Sign up
            </Link>
          </p>
          <p className="text-sm mt-2">
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
