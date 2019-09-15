import React from 'react';
import {Link} from 'react-router-dom';

import SignIn from './SignIn';

export default class SignInOptions extends React.Component {
  render() {
    return <div className='signInOptions'>
      <SignIn />
      or ..
      <Link to='/signup'>calculate your environmental awareness score.</Link>
    </div>
  }
}
