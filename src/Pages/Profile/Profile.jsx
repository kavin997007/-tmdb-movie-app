import React, { useEffect, useState } from 'react';
import { auth } from '../../Components/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import './Profile.scss';

const Profile = () => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem('accessToken');

      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return (
      <div className="profile-loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile-card">
        <img
          src={
            user.photoURL ||
            'https://cdn-icons-png.flaticon.com/512/149/149071.png'
          }
          alt="profile"
        />

        <h1>
          {user.displayName || 'Movie Lover'}
        </h1>

        <p>
          <strong>Email:</strong>{' '}
          {user.email}
        </p>

        <p>
          <strong>User ID:</strong>{' '}
          {user.uid}
        </p>

        <p>
          <strong>Provider:</strong>{' '}
          {user.providerData[0]?.providerId}
        </p>

        <button
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;