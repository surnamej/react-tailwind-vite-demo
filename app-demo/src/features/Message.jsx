import React, { useState } from 'react';

const Message = () => {
  const [message, setMessage] = useState("Hello, world!");

  return (
    <div>
      <p data-testid="message">{message}</p>
      <button onClick={() => setMessage("You clicked me!")}>Click Me</button>
    </div>
  );
};

export default Message;