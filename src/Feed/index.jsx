import React from 'react';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className='block'>
      <div className='feed'>
        
      </div>
    </div>
	<script src="../utils/facebook.js"></script>
  	<script async defer src="https://connect.facebook.net/en_US/sdk.js"></script>
  }
}
