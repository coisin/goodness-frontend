import React from 'react'
import AuthService from '../common/AuthService';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.authService = new AuthService('http://13.68.138.74:8000');
  }
  render() {
    return <form onSubmit={this.onSubmit}>
      <input name='email' type='text' placeholder='Email' onChange={this.onChange} />
      <input name='password' type='password' placeholder='Password' onChange={this.onChange} />
      <input type='submit' value='Sign In' />
    </form>;
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.authService.login(this.state.email, this.state.password);
  }
}
