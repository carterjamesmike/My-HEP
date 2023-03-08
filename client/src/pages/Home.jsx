import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">myhep</h2>
          <div className="text-gray-600">
            <p>Welcome to myhep - My Home Exercise Program</p>
            <p>Custom exercises and routines</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
