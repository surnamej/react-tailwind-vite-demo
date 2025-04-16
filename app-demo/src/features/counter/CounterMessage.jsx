import React from 'react';
import { useSelector } from 'react-redux';

function CounterMessage() {
  const count = useSelector((state) => state.counter.value);

  return (
    <p className="text-gray-500 mt-2">
      {count >= 10
        ? "High score!"
        : count >= 5
          ? "Halfway there!"
          : `Keep going: ${count}`}
    </p>
  );
}

export default CounterMessage;
