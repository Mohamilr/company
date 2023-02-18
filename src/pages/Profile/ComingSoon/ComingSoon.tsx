import React, { FC } from 'react';
import { TimerIcon } from 'assets/svg';
import ComingSoonLoader from './ComingSoonLoader/ComingSoonLoader';
import { comingSoonItems } from './ComingSoonLoader/ComingSoonLoaderData';
import './ComingSoon.scss';

const ComingSoon: FC = () => {
  return (
    <div className="coming__soon__container">
      <div className="coming__soon__tag">
        <TimerIcon />
        <span className="coming__soon__tag__text"> Coming soon</span>
      </div>
      <div className="coming__soon__loaders">
        {comingSoonItems?.map(({ icon }, index) => (
          <ComingSoonLoader key={index} icon={icon} />
        ))}
      </div>
      <div className="notifications__container">
        <h3 className="notification__header">📫 Notifications</h3>
        <p className="notification__text">
          Receive notifcations about your rider performance, efficiency reviews and a
          lot more
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
