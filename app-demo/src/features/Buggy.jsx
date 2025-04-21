import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AutoSaveMessage() {
  const [message, setMessage] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  useEffect(() => {
    console.log("Current message in effect:", message);

    const timeout = setTimeout(() => {
      setSavedMessage(message);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [message]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type something..."
      />
      <p><strong>Saved message:</strong> {savedMessage}</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
}

export default AutoSaveMessage;
