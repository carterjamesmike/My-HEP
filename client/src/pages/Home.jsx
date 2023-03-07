import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2">My HEP</h2>
          <p className="text-gray-600">
            <p>Welcome to My HEP - your resource for all things H, E, and P</p>
            <p>Be sure to buy our merch!</p>
          </p>
        </div>
       
      </div>
      <Footer />
    </div>
  );
};

export default Home;
