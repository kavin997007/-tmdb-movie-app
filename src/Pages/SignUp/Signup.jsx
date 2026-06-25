import React, { useState } from 'react';
import { auth } from '../../Components/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
  auth,
  email,
  password
);

alert('Signup Successful');

navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>

        <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />

        <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />

        <button type="submit">
          Signup
        </button>

        <p>
          Already have an account?
          <Link to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;