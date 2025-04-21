// src/components/Greeting.js
import React, { useState } from 'react';
import { capitalize } from '../app/stringUtils';

function Greeting() {
  const [name, setName] = useState('');

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded shadow w-full max-w-md mx-auto">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded w-full mb-4"
      />
      {name && (
        <p className="text-xl">
          Hello, <span className="font-semibold">{capitalize(name)}</span>!
        </p>
      )}
    </div>
  );
}

export default Greeting;
