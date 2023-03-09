import React, { useState  } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate, Navigate, } from "react-router-dom";
import { SAVE_EXERCISE } from "../utils/mutations";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateExercise = () => {
  const {register, handleSubmit, errors} = useForm();
  const [saveExercise, { error, data }] = useMutation(SAVE_EXERCISE);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      const { data } = await saveExercise({
        variables: {
          name: formData.name,
          description: formData.description,
          totalDays: formData.totalDays,
          url: formData.url,
          notes: formData.notes,
        },
      });
      navigate("/");
    } catch (e) {
       console.error(e)
    }
  };

  return (
    <main>
      <Navbar />
      <div>
      <div className="flex justify-center items-center h-screen bg-blue-100 mt-2">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Create Excercise
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-gray-600 mb-6">
              Complete the fields below to create an exercise
            </p>
            <div className="grid gap-6 md:grid-cols-1">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Name of Exercise
                </label>
                <input
                  {...register("name", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="name"
                  placeholder="Exercise Name"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Description of Exercise
                </label>
                <input
                  {...register("description", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="description"
                  placeholder="Description"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="totalDays"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Total Days to Do Exercise
                </label>
                <input
                  {...register("totalDays", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="totalDays"
                  placeholder="Total Days"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Youtube ID of Exercise
                </label>
                <input
                  {...register("url", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="url"
                  placeholder="Youtube ID"
                  required
                ></input>
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Other Notes
                </label>
                <input
                  {...register("notes", { required: true })}
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="notes"
                  placeholder="Other Notes"
                  required
                ></input>
              </div>
            </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
            >
              Create Exercise
            </button>
          </div>            
          </form>

        </div>
      </div>
      <Footer />
      </div>
    </main>
  );
};

export default CreateExercise;
