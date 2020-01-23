import React from 'react';
import Post from './Post'

function HistoryTimeline() {

  return (
    <main>
      <Post time='Just Now'
            src='./img/cat.jpg'
      />
      <Post time='Today @ 10:14 AM'
            src='./img/cat.jpg'
      />
      <Post time='Today @ 6:00 AM' 
            src='./img/cat.jpg'
      />
      <Post time='Yesterday @ 11:30PM'
            src='./img/cat.jpg'
      />
      <Post time='Sunday @ 12:40 PM'
            src='./img/cat.jpg'
      />
      <Post time='January 5 @ 9:15 AM'
            src='./img/cat.jpg' 
      />
    </main>
  )
}

export default HistoryTimeline;