import React, { useState } from 'react';

import {
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';

import {
  auth,
  googleProvider
} from '../../Components/firebase';

import {
  useNavigate,
  Link
} from 'react-router-dom';

import { FcGoogle } from 'react-icons/fc';

import './Login.scss';

const Login = () => {
  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
    useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const token =
        await userCredential.user.getIdToken();

      localStorage.setItem(
        'accessToken',
        token
      );

      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin =
    async () => {
      try {
        const result =
          await signInWithPopup(
            auth,
            googleProvider
          );

        const token =
          await result.user.getIdToken();

        localStorage.setItem(
          'accessToken',
          token
        );

        navigate('/');
      } catch (error) {
        alert(error.message);
      }
    };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          required
        />

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>

        <button
          type="button"
          className="google-btn"
          onClick={
            handleGoogleLogin
          }
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p>
          Don't have an account?
          <Link to="/signup">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;