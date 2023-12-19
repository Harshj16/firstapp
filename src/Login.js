import React, { useState } from 'react';

const Login = (props) => {
  // State to track input values
  const [name, setName] = useState(props.name || ''); // Use props.name as initial value if available
  const [pwd, setPwd] = useState(props.pwd || '');   // Use props.pwd as initial value if available

  // Function to update input values
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  // Function to log data on submit
  const submitInfo = () => {
    console.log(`Name: ${name}, Password: ${pwd}`);
  };

  return (
    <>
      <label htmlFor="name">Name:</label>
      <input type='text' id="name" value={name} onChange={handleNameChange} />
      <br />
      <label htmlFor="pwd">Password:</label>
      <input type='password' id="pwd" value={pwd} onChange={handlePwdChange} />
      <br />
      <button onClick={submitInfo}>Submit</button>
    </>
  );
};

export default Login;