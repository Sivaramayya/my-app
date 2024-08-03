<<<<<<< Updated upstream
import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from "./ListGroup";
import ListGroupProps from "./ListGroupProps";
import Calculator from './Calculator';
=======
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { UserProvider } from './context/UserContext';
import  Calculator  from './Calculator';
>>>>>>> Stashed changes

function App() {
  let teachers=['siva','vamsi','navya','divya','shan']
  return (
<<<<<<< Updated upstream
    <ListGroupProps items={teachers} heading="LIst of Teachers"/>
    
  )
}
=======
   // <UserProvider>
     // <Router>
       // <AppRoutes />
      //</Router>
    //</UserProvider>
    <Calculator/>
  );
};
>>>>>>> Stashed changes

export default App;
