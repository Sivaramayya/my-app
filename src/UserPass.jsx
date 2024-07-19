import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const users = [
  {
    username: "user1",
    password: "user1"
  },
  {
    username: "user2",
    password: "user2"
  },
  {
    username: "user3",
    password: "user3"
  }
]

const UserPass = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  //const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2500));
      const user = users.find(user => user.username === username && user.password === password);
      
      if (user) {
        setMessage("Logged in successfully.");
        console.log("checking...");
        return Promise.resolve();
      } else {
        setMessage("Username and Password do not match.");
        console.log("Not Found");
        return Promise.reject(new Error("UserName and Password did not match."));
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage("Internal Error. Please try again later.");
      return Promise.reject(error);
    }
  };
 return(
  <Card className="bg-dark text-white mt-2">
    <h2 className='ml-5 mt-3'>Login</h2>
    <Form onSubmit={handleSubmit}>
     <div className='ml-5 mt-3'>
      <label>Username:</label>
      <input className='ml-2' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
     </div>
     <div className='ml-5 mt-3'>
      <label>Password:</label>
      <input className='ml-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
     </div>
     <Button className='primary ml-5 mt-3' type="submit">Login</Button>
    </Form>
    <p className='ml-5 mt-3'>{message}</p>
  </Card>
 )
}
export default UserPass;
