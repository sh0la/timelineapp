import React, { Component } from 'react';


class StatusForm extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    
    return(
      <div>
        <form action="">
          <div className='userInput'>
            <label htmlFor="message">
              Add new status
            </label>
            <input id='message' 
                  type="text" 
                  placeholder='Message goes here...'
            />
          </div>
          <div className='submitBtn'>
            <input type="button" 
                  value="Post" 
            />
          </div>
        </form>
      </div>
    )
  }
}

export default StatusForm;

