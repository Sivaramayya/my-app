import React, { useState, useEffect } from "react";

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

const users = [
  new User('user1', 'pass1'),
  new User('user2', 'pass2'),
  new User('user3', 'pass3')
];

const LoginObjectState = () => {
  const [loginUser, setLoginUser] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleLogin = () => {
    const user = users.find(user => user.username === loginUser.username && user.password === loginUser.password);
    if (user) {
      setMessage("Login successful");
    } else {
      setMessage("Invalid credentials");
    }
  };

  console.log(loginUser);

  return (
    <>
      <input type="text" value={loginUser.username} onChange={(e) => setLoginUser({ ...loginUser, username: e.target.value })}
        placeholder="Enter username"/>
      <input type="password" value={loginUser.password} onChange={(e) => setLoginUser((prev)=>({...prev,password:e.target.value}))}
        placeholder="Enter password"></input>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </>
  );
};

export default LoginObjectState;
