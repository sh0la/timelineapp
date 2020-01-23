import React from 'react';
import Post from './Post'

function HistoryTimeline() {

  return (
    <main>
      <Post time='Just Now'/>
      <Post time='Today @ 10:14 AM'/>
      <Post time='Today @ 6:00 AM'/>
      <Post time='Yesterday @ 11:30PM'/>
      <Post time='Sunday @ 12:40 PM'/>
      <Post time='January 5 @ 9:15 AM'/>
    </main>
  )
}

export default HistoryTimeline;