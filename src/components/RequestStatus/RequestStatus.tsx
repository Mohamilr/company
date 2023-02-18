import React, { FC } from 'react';
import { RequestStatusProps } from './RequestStatusTypes';
import './RequestStatus.scss';

const RequestStatus: FC<RequestStatusProps> = ({ loading, error, onClick }) => {
  return (
    <>
      {loading && <span className="request__status --loading">Loading...</span>}
      {error && (
        <span onClick={onClick} className="request__status --error">
          Retry
        </span>
      )}
    </>
  );
};

export default RequestStatus;
