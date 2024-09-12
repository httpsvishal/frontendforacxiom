import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login (e.g., redirect to dashboard, store token, etc.)
                console.log('Login successful:', data);
            } else {
                // Handle error response
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <Navbar />
            <div className='m-5 bg-sky-600 border rounded w-full p-5 '>
                Event Management System
            </div>
            <form>
                <div className='flex justify-around'>
                    <label htmlFor='username' className='bg-sky-600 border rounded w-1/5 p-5'>Username:</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        className='bg-sky-600 w-1/5 border rounded p-5'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='flex justify-around'>
                    <label htmlFor='password' className='bg-sky-600 w-1/5 border rounded p-5'>Password:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        className='bg-sky-600 w-1/5 border rounded p-5'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='flex gap-5 justify-end pe-14'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='flex gap-5 justify-end pe-14'>
                        <button type='submit' className='bg-sky-600 w-1/5 mt-5 sm:mt-10 border rounded p-5' onClick={handleSubmit} disabled={loading}>
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <button type='button' className='bg-red-600 w-1/5 mt-5 sm:mt-10 border rounded p-5'>Cancel</button>
                    </div>
                </div>
            </form>

        </div>
    )
};

export default AdminLogin;