// src/pages/RegisterPage.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { registerUser } from '../services/api'; // We are adding this to api.ts next
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Call the register API
            const data = await registerUser({ name, email, password });
            // Log the user in immediately after successful registration
            login(data);
            // Redirect to the homepage
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Failed to register. This email may already be in use.');
        }
    };
    
    return (
        <div className="container mx-auto max-w-md py-12">
            <h1 className="text-3xl text-black font-bold mb-6">Create an Account</h1>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 shadow-md rounded-lg">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        className="w-full text-black  p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary" 
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                        type="email" 
                        placeholder="you@example.com" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        className="w-full p-3 text-black  border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary" 
                        required 
                    />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input 
                        type="password" 
                        placeholder="••••••••" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        className="w-full p-3 text-black  border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary" 
                        required 
                    />
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white p-3 rounded-lg font-semibold hover:bg-brand-primary_hover transition-colors">
                    Register
                </button>
                <p className="text-center text-sm">
                    Already have an account? <Link to="/login" className="underline text-brand-primary font-semibold">Login here</Link>
                </p>
            </form>
        </div>
    );
};

export default RegisterPage;