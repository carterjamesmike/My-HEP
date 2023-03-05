import React from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center bg-blue-100 mt-2">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Sign Up
          </h2>

          <form>
          <p className="text-gray-600 mb-6">
            Complete the fields below to create a profile
          </p>
            <div class="grid gap-6 md:grid-cols-1">
              <div>
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
              >
                First name
              </label>
              <input
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                type="text"
                id="first_name"
                placeholder="John"
                required
              ></input>
              </div>
              <div>
                <label
                  for="last_name"
                  class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Last name
                </label>
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="last_name"
                  placeholder="Doe"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="user_name"
                  class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Username
                </label>
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="last_name"
                  placeholder="Username"
                  required
                ></input>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Password
                </label>
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="last_name"
                  placeholder="Password"
                  required
                ></input>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
            >
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
