import React from 'react';

function Message(props) {
  return (
    <div className='message'>
      {props.comment}
    </div>
  )
}

export default Message;