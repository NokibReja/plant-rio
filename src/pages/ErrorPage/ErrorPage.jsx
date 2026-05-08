import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <h1 className="text-7xl font-bold text-green-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Oops! Page not found </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                The page you are looking for doesn’t exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;