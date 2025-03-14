import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProviders';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [suceess, setSuccess] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess('');
        setError('');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('Email:', email, 'Password:', password);
        createUser(email, password)
            .then(result => {
                setSuccess('User created successfully');
                console.log(result.user)
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            }
            )
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-4xl shadow-md">
                <h2 className="text-2xl font-bold text-center">Sign up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" required className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" />
                    </div>
                    {
                        error && <p className="text-red-500">{String(error)}</p>
                    }
                    {
                        suceess && <p className="text-green-500">{String(suceess)}</p>
                    }

                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">Sing Up</button>
                </form>
                <Link to="/login" className="block text-center text-indigo-600 hover:underline">Already have an account</Link>
            </div>
        </div>
    );
};

export default SignUp;