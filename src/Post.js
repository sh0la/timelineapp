import React from 'react';
import PostHeader from './PostHeader';
import Avatar from './Avatar';
import Message from './Message';

function Post(props) {
  return (
    <div className='timeline'>
      <Avatar />
      <div>
        <PostHeader timing={props.time}/>
        <Message comment={props.usermessage}/>
      </div>
    </div>
  )
}

export default Post;

