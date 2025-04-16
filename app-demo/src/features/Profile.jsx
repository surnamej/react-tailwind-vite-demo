import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => { 
  return ( 
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
      <p className="text-lg mb-8">Welcome to my profile!</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Home
      </Link>
    </div>
  );
}

export default Profile;