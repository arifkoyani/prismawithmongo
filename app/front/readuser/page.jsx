"use client";
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";

export default function FetchUserForm() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setload(true);

    try {
      const res = await fetch("/api/getuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      setload(false);
      setUserName(data.user.name);
      setError(data.message || "User not found");
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Fetch User by Email
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
          >
            Search User
          </button>
        </form>

        {userName && (
          <div className="mt-4 bg-green-100 text-green-700 p-4 rounded-lg">
            <p>
              <strong>User Name:</strong> {userName}
            </p>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-lg">
            <p>{error}</p>
          </div>
        )}

      </div>
    </div>
  );
}
