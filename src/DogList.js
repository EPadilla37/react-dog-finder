import React from 'react';
import Nav from './Nav';

const DogList = ({ dogs }) => {
  return (
    <div>
      <h1>Available Dogs</h1>
      <Nav dogs={dogs} />
    </div>
  );
};

export default DogList;
