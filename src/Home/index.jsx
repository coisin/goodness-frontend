import React from 'react';

import SignInOptions from './SignInOptions';
import Auth from '../utils/auth.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <div className='block'>
        <SignInOptions />
      </div>
	  <div className='button'>
		  <button onClick={this.onClick}>Link bank</button>
	  </div>
    </div>
  }
  onClick() {
	  Auth('helloworld');
  }
}