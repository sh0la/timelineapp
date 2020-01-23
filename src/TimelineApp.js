import React, { Component } from 'react';
import Header from './Header';
import StatusForm from './StatusForm';
import HistoryTimeline from './HistoryTimeline';



class TimelineApp extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <StatusForm />
        <HistoryTimeline />
      </div>
    )
  }
}

export default TimelineApp;
