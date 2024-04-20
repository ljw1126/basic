import React from 'react';

export default function Avatar({image, isNew}) {
  return (
      <div className='avatar'>
        <img className='photo' src={image} alt='sample'/>
        {isNew && <span className='new'>NEW</span>}
      </div>
  );
}