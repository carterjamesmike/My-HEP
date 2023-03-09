import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CreateExercise = () => {
  return (
    <main>
      <Navbar />
      <div>
      <div className="flex justify-center items-center h-screen bg-blue-100 mt-2">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Create Excercise
          </h2>

          <form>
            <p className="text-gray-600 mb-6">
              Complete the fields below to create an exercise
            </p>
            <div class="grid gap-6 md:grid-cols-1">
              <div>
                <label
                  for="ex_name"
                  class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Name of Exercise
                </label>
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="ex_name"
                  placeholder="Lunges"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="ex_type"
                  class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Exercise Type
                </label>
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="ex_type"
                  placeholder="Strength"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="ex_target"
                  class="block text-sm font-medium text-gray-900 dark:gray-800 mb-2"
                >
                  Target
                </label>
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  type="text"
                  id="ex_target"
                  placeholder="Legs"
                  required
                ></input>
              </div>
            </div>
          </form>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
            >
              Create Exercise
            </button>
          </div>
        </div>
      </div>
      <Footer />
      </div>
    </main>
  );
};

export default CreateExercise;
