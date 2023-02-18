import React, { FC } from 'react';
import { ComingSoonLoaderProps } from './ComingSoonLoaderTypes';
import './ComingSoonLoader.scss';

const ComingSoonLoader: FC<ComingSoonLoaderProps> = ({ icon }) => {
  return (
    <div className="coming__soon__loader">
      {icon}
      <div className="loaders">
        <div className="loader --long"></div>
        <div className="loader --short"></div>
      </div>
    </div>
  );
};

export default ComingSoonLoader;
