import React, { useEffect } from 'react';
import Nav from 'components/Nav/Nav';
import ComingSoon from './ComingSoon/ComingSoon';
import ProfilePane from './ProfilePane/ProfilePane';
import { diffMinutes } from 'utils/helpers';
import { useNavigate } from 'react-router-dom';
import './Profile.scss';

const Profile = () => {
  const loginTime = localStorage.getItem('loginTime') || new Date().toISOString();

  const navigate = useNavigate();

  useEffect(() => {
    const logoutInterval = setInterval(() => {
      const loginDuration = diffMinutes(new Date(loginTime), new Date());

      if (loginDuration >= 2) {
        localStorage.removeItem('loginTime');
        navigate('/');
      }
    }, 2000);

    return () => {
      clearInterval(logoutInterval);
    };
  }, []);

  return (
    <div className="profile__container">
      <Nav />
      <div className="profile__wrapper">
        <ProfilePane />
        <ComingSoon />
      </div>
    </div>
  );
};

export default Profile;
