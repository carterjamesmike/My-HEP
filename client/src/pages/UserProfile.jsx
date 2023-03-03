import React from "react";
import Navbar from "../components/Navbar";

const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            User Profile Page
          </h2>
          <p className="text-gray-600">
            <p>Create a user profile</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create a user profile
            </button>
            <p>Sign up to access more features</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
