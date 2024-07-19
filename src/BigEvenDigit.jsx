import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const BigEvenDigit = () => {
  const [inputValue, setInputValue] = useState('');
  const [bigEvenDigit, setBigEvenDigit] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    let maxEvenDigit = '';
    for (let i = 0; i < value.length; i++) {
      const digit = value[i];
      if (parseInt(digit) % 2 === 0) {
        if (digit > maxEvenDigit) {
          maxEvenDigit = digit;
        }
      }
    }

    setBigEvenDigit(maxEvenDigit);
  };
  const handleClear = () => {
    setInputValue('');
    setBigEvenDigit('');
  }

  return (
    <Card className="bg-dark text-white mt-2">
      <h2 className='ml-5 mt-3'>Even Big Digit in the Number</h2>
      <div className='ml-5'>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a number"
        />
        <Button variant="warning" className='ml-2' onClick={handleClear}>Clear</Button>
        </div>
      <h4 className='mt-2 ml-5'>Biggest Even Digit: {bigEvenDigit}</h4>
    </Card>
  );
};

export default BigEvenDigit;
