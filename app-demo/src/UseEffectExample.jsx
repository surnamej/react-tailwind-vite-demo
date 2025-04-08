import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UseEffectExample = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Logs a message when the component mounts and unmounts
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleFetch = () => {
    console.log('Fetching data...');
    setIsLoading(true);
    setError(null);
    setData(null); // Clear previous data

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((json) => {
        console.log('Data fetched successfully');
        setData(json);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
        console.log('Cleanup after fetch (manual)');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">useEffect Example</h1>

      <button
        onClick={handleFetch}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Fetch Data
      </button>

      {isLoading && <p className="text-gray-700">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {data && (
        <div className="mt-4 p-4 border border-gray-300 bg-white rounded">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}

      <Link to="/" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
};

export default UseEffectExample;
