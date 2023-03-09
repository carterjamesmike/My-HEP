import React, { useState  } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate, } from "react-router-dom";
import auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreatePatient = () => {
  const {register, handleSubmit, errors} = useForm();
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const { data } = await addUser({
        variables: { 
          username: formData.username,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
        },
      });
      auth.login(data.addUser.token);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100 mt-2">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Create Patient Profile
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-gray-600 mb-6">
              Complete the fields below to create a profile for your patient
            </p>
            <div className="grid gap-6 md:grid-cols-1">
            <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Username
                </label>
                <input
                  {...register("username", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="username"
                  placeholder="Username"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="password"
                  placeholder="Password"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="patient_first_name"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  First name
                </label>
                <input
                  {...register("firstName", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="firstName"
                  placeholder="John"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="patient_last_name"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Last name
                </label>
                <input
                  {...register("lastName", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  required
                ></input>
              </div>
            </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
              type="submit"
            >
              Create Patient Profile
            </button>
          </div>            
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePatient;
