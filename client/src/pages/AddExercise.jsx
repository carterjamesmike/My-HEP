import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_EXERCISE, SAVE_EXERCISE } from "../utils/mutations";
import { ADD_USER } from "../utils/mutations";
import { QUERY_USERS, QUERY_EXERCISES } from "../utils/queries";
import { useParams } from "react-router-dom";
import { userData } from "../data/userData";
import { exerciseData } from "../data/exerciseData";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const AddExercise = () => {
  const { data: user_data, loading: user_loading, error: user_error } = useQuery(QUERY_USERS);
  const users = user_data?.users;
  const { data, loading, error } = useQuery(QUERY_EXERCISES);
  const exercises = data?.exercises;
  console.log(exercises);
  console.log(users);
  // const [usersState, setUsersState] = useState([])
  // const [exercisesState, setExercisesState] = useState([])
const [selectedUser, setSelectedUser] = useState("");
const [selectedExercise, setSelectedExercise] = useState("");

const test = () => {
  console.log(selectedUser)
  console.log(selectedExercise)
}

  // const usersQuery = () => {
  //   const { data } = useQuery(QUERY_USERS);
  //   setUsersState(data)npm 
  // };

  // const exercisesQuery = () => {
  //   const { data } = useQuery(QUERY_EXERCISES);
  //   setExercisesState(data)
  // };

  // usersQuery()
  // exercisesQuery()

  //  const  { data }  = useQuery(QUERY_EXERCISES);
  const [addExercise] = useMutation(ADD_EXERCISE);
  //const { datas } = useQuery(QUERY_USERS);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  //console.log(usersState)
  //console.log(exercisesState)
 

  return (
    <div>
      <Navbar />
      
      <div className="flex justify-center items-center h-screen bg-blue-100">
        
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Assign Exercise
          </h2>

          <form onSubmit={(e) => {
            e.preventDefault();
             test()
            addExercise({ variables: { userId: selectedUser, exercise: selectedExercise } });
          }}>
          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="exercises">Select an exercise</label>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 m-5" id="exercises" value={selectedExercise} onChange={(e) => setSelectedExercise(e.target.value)}>
              {/* {data?.exercises?.map((exercise) => (
                <option key={exercise._id} value={exercise._id}>
                  {exercise.name}
                </option>
              ))} */}
              {exercises?.map((exercise) => (
                <option key={exercise._id} value={exercise._id}>
                  {exercise.name}
                </option>
              ))}

            </select>
          </div>

          <div className="relative w-full lg:max-w-sm">
            <label htmlFor="users">Select a patient</label>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 m-5" id="users" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
              {users?.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5">Assign</button>
</form>

          
          <div className="flex justify-center items-center mt-6"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddExercise;
