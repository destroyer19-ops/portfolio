import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-transparent  text-white p-6">
      {/* Error Number */}
      <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600 animate-pulse">
        404
      </div>

      {/* Error Message */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold tracking-wide mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Sorry, the page you're looking for doesn't exist.
        </p>

        {/* Button to go back */}
        <Link to="/" className="inline-block px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition duration-300 ease-in-out shadow-lg shadow-indigo-600/50">
          Go Back Home
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-indigo-500 rounded-full blur-3xl opacity-20 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-ping"></div>
    </div>
  );
};

export default NotFound;
