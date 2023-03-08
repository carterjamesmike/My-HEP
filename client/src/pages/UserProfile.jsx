import React from "react";
import { useQuery } from "@apollo/client";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const UserProfile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <main>
      <Navbar />
      <div>
        {user?.username === "admin" ? (
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
              <div className="flex justify-center items-center mt-6"></div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen bg-blue-100">
          <div className="bg-white rounded shadow-2xl p-10">
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              User Profile
            </h2>
            <div className="flex justify-center items-center mt-6">
              <a href="/Exercise">
                <button
                  className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
                >
                  Exercise
                </button>
              </a>
            </div>
            <div className="flex justify-center items-center mt-6"></div>
          </div>
        </div>
        )}
        <Footer />
      </div>
    </main>
  );
};

export default UserProfile;

