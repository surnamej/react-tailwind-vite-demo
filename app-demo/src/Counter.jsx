import React, {useState} from "react";
import Button from './style_components/Button';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="space-x-2">
        <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    </div>
  );
};

export default Counter;

/* 
-----  Handling State & User Input  -----
-------- jsx version --------
import React, { useState } from 'react';

function Counter() {
  // Initialize count state with a default value of 0
  const [count, setCount] = useState(0);

  // Function to handle the increment
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-4">
      <p className="text-xl mb-2">Count: {count}</p>
      <button 
        onClick={increment} 
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;


---- js version ----
import React, { useState } from 'react';

function Counter() {
  // Initialize count state with a default value of 0
  const [count, setCount] = useState(0);

  // Function to handle the increment
  const increment = () => {
    setCount(count + 1);
  };

  return React.createElement(
    'div',
    { className: 'p-4' },
    React.createElement(
      'p',
      { className: 'text-xl mb-2' },
      'Count: ' + count
    ),
    React.createElement(
      'button',
      { onClick: increment, className: 'bg-blue-500 text-white py-2 px-4 rounded' },
      'Increment'
    )
  );
}

export default Counter;
*/ 
