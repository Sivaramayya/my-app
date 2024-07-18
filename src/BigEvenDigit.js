import React, { useState } from 'react';

function BigEvenDigit() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(0);

    const calculateBiggestEvenDigit = () => {
        let x = parseInt(number);
        let big = 0;

        while (x > 0) {
            let rem = x % 10;
            if (rem % 2 === 0 && rem > big) {
                big = rem;
            }
            x = Math.floor(x / 10);
        }

        setResult(big);
    };

    return (
        <div>
            <b>Enter a Number</b>
            <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={calculateBiggestEvenDigit}>GetEvenBig</button>
            {result !== 0 && <p>Biggest Even Digit: {result}</p>}
        </div>
    );
}

export default BigEvenDigit;