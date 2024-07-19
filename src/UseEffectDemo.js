import React, { useEffect, useState } from "react";
const UseEffectDemo = () => {
const [count, setCount] = useState(0);
useEffect(() => {
    console.log("Run useEffect", count);
    return () => { // clean-up function
    console.log("Clean up", count);
    };
}, []);
return (
<>
<h3>Count {count}</h3>
<button onClick={() => setCount(count + 1)}>Increase</button>
</>
);
};
export default UseEffectDemo;