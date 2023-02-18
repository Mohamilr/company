import React from 'react';
import Nav from 'components/Nav/Nav';
import ComingSoon from './ComingSoon/ComingSoon';
import ProfilePane from './ProfilePane/ProfilePane';
import './Profile.scss';

const Profile = () => {
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
