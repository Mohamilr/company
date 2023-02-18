import React, { FC } from 'react';
import ProfileProperty from './ProfileProperty/ProfileProperty';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { useQuery, gql } from '@apollo/client';
import { getCompanyProfile } from 'graphql/queries';
import RequestStatus from 'components/RequestStatus/RequestStatus';
import './ProfilePane.scss';

const ProfilePane: FC = () => {
  const { loading, error, data, refetch } = useQuery(
    gql`
      ${getCompanyProfile}
    `
  );

  const renderBasedOnStatus = () => {
    if (loading) return <RequestStatus loading={true} />;
    if (error) return <RequestStatus error={true} onClick={() => refetch()} />;
    if (data)
      return (
        <>
          {' '}
          <ProfileHeader companyName={data?.company?.name} />
          <div className="company__profile">
            <ProfileProperty header="CEO" content={data?.company?.ceo} />
            <ProfileProperty header="CTO" content={data?.company?.cto} />
          </div>
        </>
      );
  };

  return <div className="profile__pane__container">{renderBasedOnStatus()}</div>;
};

export default ProfilePane;
