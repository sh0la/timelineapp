import React from 'react';
import Post from './Post'

function HistoryTimeline() {

  return (
    <main>
      <Post time='Just Now'
            src='./img/cat.jpg'
            usermessage='Repellendus sed obcaecati. Possimus nisi animi dolorem omnis mollitia.'
      />
      <Post time='Today @ 10:14 AM'
            src='./img/cat.jpg' 
            usermessage='Repellendus sed obcaecati. Possimus nisi animi dolorem omnis mollitia.'
      />
      <Post time='Today @ 6:00 AM' 
            src='./img/cat.jpg' 
            usermessage='Repellendus sed obcaecati. Possimus nisi animi dolorem omnis mollitia.'
      />
      <Post time='Yesterday @ 11:30PM'
            src='./img/cat.jpg' 
            usermessage='Repellendus sed obcaecati. Possimus nisi animi dolorem omnis mollitia.'
      />
      <Post time='Sunday @ 12:40 PM'
            src='./img/cat.jpg' 
            usermessage='Repellendus sed obcaecati. Possimus nisi animi dolorem omnis mollitia.'
      />
      <Post time='January 5 @ 9:15 AM'
            src='./img/cat.jpg' 
            usermessage='Repellendus sed obcaecati. Possimus nisi animi dolorem omnis mollitia.'
      />
    </main>
  )
}

export default HistoryTimeline;