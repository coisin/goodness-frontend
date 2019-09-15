import React from 'react';

import SignInOptions from './SignInOptions';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <div className='block'>
        <SignInOptions />
      </div>
    </div>
  }
}
