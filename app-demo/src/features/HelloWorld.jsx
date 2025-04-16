import React from 'react';

function HelloWorld({ name }) {
  return (
    <div className="flex flex-col items-center p-4">
      <h1>Hello, {name}!</h1>
    </div>
  );
}

export default HelloWorld;

/* js version

import React from 'react';

function HelloWorld({ name }) {
  return React.createElement(
    'h1',
    { className: 'text-3xl' },
    `Hello, ${name}!`
  );
}

export default HelloWorld;
*/
