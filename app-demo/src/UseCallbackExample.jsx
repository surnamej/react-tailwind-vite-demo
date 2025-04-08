import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '../src/style_components/Button'; // Assuming you have a Button component

// Child Component
const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return (
    <div>
      <Button onClick={onClick}>Click Me (Child)</Button>
    </div>
  );
});

// Parent Component
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button in child clicked!');
  }, []); // Empty deps array to memoize this function once

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Use React Hook: Callback</h1>
      <h2>Count: {count}</h2>
      <Button onClick={() => setCount(prev => prev + 1)}>Increment Count</Button>
      <Child onClick={handleClick} />

      <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default Parent;
