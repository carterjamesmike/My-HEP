import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Admin Profile
          </h2>
          <div className="flex justify-center items-center mt-6">
            <a href="/CreateExercise">
              <button
                className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
              >
                Create Excercise
              </button>
            </a>
          </div>
          <div className="flex justify-center items-center mt-6">
            <a href="/CreatePatient">
              <button
                className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
              >
                Create Patient Profile
              </button>
            </a>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminProfile;
