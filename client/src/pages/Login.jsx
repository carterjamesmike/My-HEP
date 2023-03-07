import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import ReactDOM from "react-dom/client";
import Auth from "../utils/auth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// function Login() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <main>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <div className="bg-white rounded shadow-2xl p-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Login</h2>
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              {/*USERNAME INPUT*/}

              <label>
                Enter your username:
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  placeholder="username"
                  type="text"
                  name="username"
                  value={formState.username || ""}
                  onChange={handleChange}
                />
              </label>

              {/*PASSWORD INPUT}*/}

              <label>
                Enter your password:
                <input
                  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                  placeholder="password"
                  type="password"
                  name="password"
                  value={formState.password || ""}
                  onChange={handleChange}
                />
              </label>

              <div className="flex justify-center items-center mt-6">
                <button
                  className={`bg-blue-100 py-2 px-4 text-sm text-grey-200 rounded border border-green focus:outline-none focus:border-green-dark mb-5`}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          {error && <div>{error.message}</div>}
        </div>
      </div>
      <Footer />
    </main>
  );
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);

export default Login;
