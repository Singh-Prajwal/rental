// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../services/api'; // We will create this API function next
import { useNavigate, Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const data = await loginUser({ email, password });
            login(data);
            navigate('/'); // Redirect to homepage on successful login
        } catch (error) {
            alert('Failed to login. Please check your credentials.');
        }
    };
    
    // Simple form JSX
    return (
        <div className="container mx-auto max-w-md py-12">
            <h1 className="text-3xl text-black font-bold mb-6">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="text-black w-full p-3 border rounded-lg" required />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="text-black w-full p-3 border rounded-lg" required />
                <button type="submit" className="w-full bg-brand-primary text-white p-3 rounded-lg">Login</button>
                <p className="text-center">New to UrbanStay? <Link to="/register" className="underline text-brand-primary">Register here</Link></p>
            </form>
        </div>
    );
};

export default LoginPage;