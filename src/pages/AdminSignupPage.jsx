import React from 'react';
import { useState } from 'react';
import Navbar from '../components/Navbar';

const AdminSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const role = 'Admin';
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
          const response = await fetch('http://localhost:1400/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email, role, category }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // Handle successful signup (e.g., redirect to login page, show success message, etc.)
            console.log('Signup successful:', data);
          } else {
            // Handle error response
            setError(data.error || 'Signup failed');
          }
        } catch (err) {
          setError('An error occurred. Please try again.');
        } finally {
          setLoading(false);
        }
      };

    return (
        <div className='m-5 border rounded w-full p-5'>
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
                <div className='flex justify-around'>
                    <label htmlFor='email' className='w-1/5 bg-sky-600 border rounded p-5'>Email:</label>
                    <input 
                        type='email'
                        id='email'
                        name='email'
                        className='bg-sky-600 w-1/5 border rounded p-5'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='flex justify-around'>
                    <label htmlFor='service' className='w-1/5 bg-sky-600 border rounded p-5'>Service:</label>
                    <select
                        id='category'
                        name='category'
                        className='bg-sky-600 w-1/5 border rounded p-5'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value=''>Select Category</option>
                        <option value='catering'>Catering</option>
                        <option value='florist'>Florist</option>
                        <option value='decoration'>Decoration</option>
                        <option value='lighting'>Lighting</option>
                    </select>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type='submit' className='bg-sky-600 w-2/5 mt-5 sm:mt-10 border rounded p-5' onClick={handleSubmit} disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
            </form>
        </div>

    );
};

export default AdminSignup;