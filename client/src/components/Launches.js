import React from 'react';
import gql from 'graphql-tag'; //graphql-tag is a part of graphql package
import { useQuery } from '@apollo/react-hooks';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUCHES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log(error);
  }

  return (
    <>
      <h1 className='display-4 my-3'>Launches</h1>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  );
};

export default Launches;
