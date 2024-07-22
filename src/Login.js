import { useState,useEffect } from "react";

const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'pass3' }
  ]
const Login=()=>{

const [username,setUserName]=useState();
const [password,setPassword]=useState();
const [message,setMessage]=useState();

useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

const handleLogin=()=>{
    const user=users.find(user=>user.username===username && user.password===password);
    if(user){
        setMessage("Login successful");
    }else{
        setMessage("Invalid credentials");
    }
}


return(
    <>
   <input type="text" value={username}  onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter username"></input>
    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"></input>
    <button onClick={handleLogin} >Login</button>
    <p>{message}</p>
    </>
)




}
export default Login;