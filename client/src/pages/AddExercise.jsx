import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddExercise = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Add Exercise
          </h2>
          <div className="relative w-full lg:max-w-sm">
            <p>Exercise</p>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 m-5">
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className="relative w-full lg:max-w-sm">
            <p>Patient</p>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 m-5">
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
          <div className="flex justify-center items-center mt-6"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddExercise;
