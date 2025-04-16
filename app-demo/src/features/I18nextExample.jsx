// I18nextExample.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../app/ii8n'; // Ensure i18next is initialized

const I18nextExample = () => {
  const { t, i18n } = useTranslation();

  // Function to change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
        {t('welcome')}
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        {t('description')}
      </p>
      <div className="flex space-x-4 mb-8">
        <button 
          onClick={() => changeLanguage('en')} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('th')} 
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
        >
          Thai
        </button>
      </div>

      <Link 
        to="/" 
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded transition duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default I18nextExample;
