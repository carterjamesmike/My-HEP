import React from "react";
import { useQuery } from "@apollo/client";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { QUERY_SINGLE_EXERCISE } from "../utils/queries";


const Exercise = () => {
  

  const { exerciseId } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_EXERCISE, {
    variables: { exerciseId: exerciseId },
  });

  const exercise = data?.exercise || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const videoId = exercise.url;
  const src = `https://www.youtube.com/embed/${videoId}`;  
  console.log(exerciseId)
  console.log(videoId)
  return (
    <main className="bg-blue-100">
      <Navbar />
      <div className="bg-blue-100">
       
          <div className="flex justify-center items-center bg-blue-100 mt-2">
            <div className="pt-[55px] bg-blue-100 flex flex-col w-full  h-full rounded shadow-2xl p-10">
              <h2>{exercise.name}</h2>

              <p className="text-gray-600"> </p>

              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                See the exercise video below!
              </h2>
              <div className="flex justify-center items-center mb-8">
                <iframe
                  width="560"
                  height="315"
                  src={src}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="flex flex-col items-center justify-center">
              <p className="max-w-md mx-auto">
                <h2>Description of exercise</h2>
                {exercise.description}
              </p>
              <p className="max-w-md mx-auto">
                <h2>Total day to perform</h2>
                {exercise.totalDays}
              </p>
              <p className="max-w-md mx-auto">
                <h2>Other notes</h2>
                {exercise.notes}
              </p>                
              </div>

            </div>
          </div>
        <Footer />
      </div>
    </main>
  );
};

export default Exercise;

