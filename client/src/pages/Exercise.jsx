import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Exercise = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Exercise</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-600">
          <div className="bg-white rounded border p-10">
              <ul className="list-disc">
                <li>Name:</li>
                <li>Type:</li>
                <li>Target:</li>
                <li>Description:</li>
              </ul>
            </div>
            <div className="bg-white rounded border p-10">
              <ul className="list-disc">
                <li>Name:</li>
                <li>Type:</li>
                <li>Target:</li>
                <li>Description:</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exercise;
