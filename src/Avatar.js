import React from 'react';

function Avatar(props) {
  return (
    <div className='avatar'>
      <img 
          src={props.src} 
          alt=""
      />
    </div>
  )
}

export default Avatar;