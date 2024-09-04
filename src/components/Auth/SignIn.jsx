import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        const user = JSON.parse(localStorage.getItem(email));

        if (!user) {
            setError('User does not exist.');
            return;
        }

        if (user.password !== password) {
            setError('Incorrect password.');
            return;
        }

        // Save logged-in status to localStorage
        localStorage.setItem('loggedInUser', email);
        navigate('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-100">Sign In</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-100"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-100"
                        />
                    </div>
                    {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Sign In
                    </button>
                </form>
                <div className="mt-4 text-center text-gray-300">
                    <p>Don't have an account? <a href="/signup" className="text-indigo-400 hover:underline">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}
