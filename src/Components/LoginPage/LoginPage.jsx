import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.value;
    const password = e.target.value;
    console.log('Email:', username, 'Password:', password);
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-4xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Sing in</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="email" id="email" name="email" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                    </div>
                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sing in</button>
                </form>
                <Link to="/signup" className="block text-center text-indigo-600 hover:underline">Create an account</Link>
            </div>
        </div>
    );
};

export default LoginPage;