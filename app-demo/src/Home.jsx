import React from "react";
import { Link } from "react-router-dom";

import HelloWorld from './HelloWorld';
import Counter from './Counter';
import ListForm from './ListForm';


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <p className="text-lg mb-8">Welcome to Home Page!</p>
      <div>
        <HelloWorld name="Focus Bear" />
        <Counter />
        <ListForm />
      </div>
      <div className="space-x-2">
        <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Profile
        </Link>
        <Link to="/useEffect" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to userEffect Example
        </Link>
        <Link to="/useMemo" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to useMemo Example
        </Link>
        <Link to="/useCallback" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to useCallback Example
        </Link>
        <Link to="/formik" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Formik Example
        </Link>
        <Link to="/i18next" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to i18next Example
        </Link>
        <Link to="/axios" className="bg-blue-500 text-white px-4 py-2 rounded">
          Go to Axios Example
        </Link>

      </div>
    </div>
  );
}

export default Home;