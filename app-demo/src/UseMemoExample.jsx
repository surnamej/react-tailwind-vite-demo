import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Function to calculate factorial (expensive calculation)
const calculateFactorial = (num) => {
  if (num <= 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Example usage
const UseMemoExample = () => {
  const [number, setNumber] = React.useState(2);

  // useMemo to memoize the expensive calculation
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    return calculateFactorial(number);
  }, [number]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">useMemo Example</h1>
      <p className="text-lg mb-8">Factorial of {number}: {factorial}</p>

      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} className="border p-2 mb-4" />
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default UseMemoExample;
