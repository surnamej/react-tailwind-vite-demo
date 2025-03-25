import React from 'react';

function HelloWorld({ name }) {
  return React.createElement(
    'h1',
    { className: 'text-3xl' },
    `Hello, ${name}!`
  );
}

export default HelloWorld;

