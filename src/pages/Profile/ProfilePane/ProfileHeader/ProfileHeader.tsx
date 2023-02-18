import React, { FC, useState, useEffect, useCallback } from 'react';
import { ProfileHeaderProps } from './ProfileHeaderTypes';
import { generateAvatar } from 'utils/helpers';
import './ProfileHeader.scss';

const ProfileHeader: FC<ProfileHeaderProps> = ({ companyName }) => {
  const [avatar, setAvatar] = useState<string>('');

  const createAvatar = useCallback(async () => {
    const avi = generateAvatar(companyName);
    setAvatar(avi);
  }, [companyName]);

  useEffect(() => {
    createAvatar();
  }, []);

  return (
    <div className="profile__header">
      <img src={avatar} alt="company avatar" className="company__avatar" />
      <h4 className="company__name">{companyName}</h4>
    </div>
  );
};

export default ProfileHeader;
