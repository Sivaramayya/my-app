import React, {useState} from 'react';
import { Card, Form } from 'react-bootstrap';

const CheckBox = () => {
   const [checked, setChecked] = useState([]);
 
   function handleChange(e) {
     const value = e.target.value;
     if (e.target.checked && checked.length <= 2) {
       setChecked(checked => [...checked, value]);
     } else {
       setChecked(checked => checked.filter(item => item !== value));
     }
   }
 
   return (
     <Card className="bg-dark text-white mt-2">
      <h2 className='ml-5 mt-3'>CheckBox Selection for Mode of Transport</h2>
       <div className='ml-5 mt-3'>
         <Form.Check value="Car" type="switch" id="custom-switch"
                     label="Check this for Car" onChange={handleChange} 
                     disabled={checked.length >= 2 && !checked.includes("Car")} />
       </div>
       <div className='ml-5 mt-3'>
         <Form.Check value="Bike" type="switch" id="custom-switch"
                     label="Check this for Bike" onChange={handleChange} 
                     disabled={checked.length >= 2 && !checked.includes("Bike")} />
       </div>
       <div className='ml-5 mt-3'>
         <Form.Check value="Cycle" type="switch" id="custom-switch"
                     label="Check this for Cycle" onChange={handleChange} 
                     disabled={checked.length >= 2 && !checked.includes("Cycle")} />
       </div>
       <div className='ml-5 mt-3 mb-3'>The all checked values are {checked.join(", ")}</div>
     </Card>
   );
 };

export default CheckBox;
