import React from "react";
import Navbar from "../components/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center bg-blue-100 mt-2">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Sign up for a profile below
          </h2>
          <p className="text-gray-600 mb-5">Complete the form fields below to create a profile</p>
          <form>
            <div class="grid gap-6 md:grid-cols-1">
              <label
                for="first_name"
                class="block text-sm font-medium text-gray-900 dark:gray-800"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              ></input>
              <div>
                <label
                  for="last_name"
                  class="block text-sm mb-6 font-medium text-gray-900 dark:gray-800"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="user_name"
                  class="block text-sm mb-6 font-medium text-gray-900 dark:gray-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Username"
                  required
                ></input>
              </div>

              <div>
                <label
                  for="password"
                  class="block text-sm mb-6 font-medium text-gray-900 dark:gray-800"
                >
                  Password
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border mb-5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Password"
                  required
                ></input>
              </div>


            </div>
          </form>
          <p className="text-gray-600">
            <button class="bg-blue-500 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create a user profile
            </button>
            </p>
          
          <div className='flex justify-center items-center mb-8'>
          </div>
    
          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
