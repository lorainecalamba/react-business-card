import React from 'react';
import MyPhoto from '../Images/loraine.JPG';

function Photo() {
  return (
    <div>
      <img src={MyPhoto} alt='User' className='card--photo' />
    </div>
  )
}

export default Photo