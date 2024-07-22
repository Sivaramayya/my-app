import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';

class User {
  constructor(username, password, id) {
    this.username = username;
    this.password = password;
    this.id = id;
  }
}

const users = [
  new User('user1', 'pass1', 1),
  new User('user2', 'pass2', 2),
  new User('user3', 'pass3', 3)
];

const Login = () => {
  const [loginUser, setLoginUser] = useState({ username: '', password: '' });
  const { setUser } = useContext(UserContext);// accessing context
  const navigate = useNavigate();  //routing

 const handleLogin = () => {
    const user = users.find(user => user.username === loginUser.username && user.password === loginUser.password);
    if (user) {
      setUser(user);  //update context
      navigate("/welcome");
    } else {
      navigate("/login-failed");
    }
  };

  return (
    <>
      <input type="text" value={loginUser.username} onChange={(e) => setLoginUser({ ...loginUser, username: e.target.value })}
        placeholder="Enter username"/>
      <input type="password" value={loginUser.password} onChange={(e) => setLoginUser((prev)=>({...prev,password:e.target.value}))}
        placeholder="Enter password"></input>
      <button onClick={handleLogin}>Login</button>
      </>
  );
};

export default Login;
