import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
//import ReactDOM from 'react-dom/client';

import Auth from '../utils/auth';

import Navbar from '../components/Navbar';

const Login = (props) => {
  const [formState, setFormState] = useState({ username: '', password: '' });
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
    }
    catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      password: '',
    }); 
  };


  return (
<main>
      <Navbar />
      <div>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
        <form onSubmit={handleFormSubmit}>
          <label>Enter your username:
            <input 
              placeholder='username'
              type="text" 
              name="username" 
              value={formState.username || ""} 
              onChange={handleChange}
            />
            </label>
            <label>Enter your password:
              <input 
                placeholder='password'
                type="text" 
                name="password" 
                value={formState.password || ""} 
                onChange={handleChange}
              />
              </label>
              <input type="submit" />
        </form>     
        )}    
        {error && (
          <div>
            {error.message} Dang!
          </div>
        )}        
      </div>
     
    </main>
  )
}
    

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Login />);

export default Login;
