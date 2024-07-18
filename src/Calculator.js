import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1 = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2 = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtract = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiply = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivide = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
  }

  return (
    <Card className="bg-dark text-white mt-2">
      <h2 className='ml-5 mt-3'>Simple Calculator</h2>
      <div className='ml-5 mt-3'>
        <input type="number" value={num1} onChange={handleNum1} placeholder='Enter 1st number'/>
        <input type="number" value={num2} onChange={handleNum2} placeholder='Enter 2nd number'/>
        <Button className='primary ml-2' onClick={handleAdd}>+</Button>
        <Button className='primary ml-2' onClick={handleSubtract}>-</Button>
        <Button className='primary ml-2' onClick={handleMultiply}>*</Button>
        <Button className='primary ml-2' onClick={handleDivide}>/</Button>
        <Button variant="warning" className='ml-2' onClick={handleClear}>Clear</Button>
      </div>
      <h4 className='ml-5 mt-3'>Result: {result}</h4>
    </Card>
  );
};

export default Calculator;

