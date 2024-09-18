"use client";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateEmailForm() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [masge, setmasge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const respo = await fetch("/api/updateuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentEmail,
        newEmail,
      }),
    });

    const { message,masge } = await respo.json();
    setmasge(message)
    if(masge=="100"){
      toast("User is Updated")
      setCurrentEmail("");
      setNewEmail("")
      setmasge("")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Update Email
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Current Email Input */}
          <div>
            <label
              htmlFor="current-email"
              className="block text-sm font-medium text-gray-700"
            >
              Current Email
            </label>
            <input
              type="email"
              id="current-email"
              value={currentEmail}
              onChange={(e) => setCurrentEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Enter your current email"
              required
            />
          </div>

          {/* New Email Input */}
          <div>
            <label
              htmlFor="new-email"
              className="block text-sm font-medium text-gray-700"
            >
              New Email
            </label>
            <input
              type="email"
              id="new-email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
              placeholder="Enter your new email"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300"
          >
            Update Email
          </button>
        <ToastContainer />

        </form>
        {masge && <p className="m-1 text-red-400">{masge}</p>}
      </div>
    </div>
  );
}
