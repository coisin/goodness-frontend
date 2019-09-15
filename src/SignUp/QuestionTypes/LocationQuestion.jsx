import React from 'react';
//import Geolookup from 'react-geolookup';

export default class LocationQuestion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className='questionContent'>
      <div className='questionSection'>
      <div className='questionTitle'>
        {this.props.question}
      </div>
      </div>
    </div>
  }
}
