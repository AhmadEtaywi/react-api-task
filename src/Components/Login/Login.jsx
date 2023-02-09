import React, { useState, useEffect } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event.target.elements.email.value;
    const user = users.find((user) => user.email === userName);
    if (!user) {
      setError('Wrong Email please Try again !!!');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/dashboard');  
    
    }
  };

  return (
        <>
      <div className='wrapper'>
        <h6 className='Log-in-text'>Log In</h6>
        <form className='password-box' onSubmit={handleSubmit}>
          <input id="email" type="email" required />
          <input id="pass" type="password" />      
          <button id='btn1' type="submit">LOG IN</button>
          {error && <div id="wrong-pass">{error}</div>}
        </form>
      </div>
        </>
  );
};

export default Login;
