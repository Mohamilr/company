import React, { FC } from 'react';
import { ProfileProps } from './ProfilePropertyTypes';
import './ProfileProperty.scss';

const Profile: FC<ProfileProps> = ({ header, content }) => {
  return (
    <div className="profile">
      <span className="profile__header">{header}</span>
      <p className="profile__content">{content}</p>
    </div>
  );
};

export default Profile;
