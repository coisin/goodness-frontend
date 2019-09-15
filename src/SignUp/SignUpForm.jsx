import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      password: undefined
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return <div className='signUpForm'>
      <form>
        <input type='text' name='email' placeholder='Email' onChange={this.onChange} />
        <input type='password' name='password' placeholder='Password' onChange={this.onChange} />
        <button onClick={this.onSubmit}>Sign Up</button>
      </form>
    </div>
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.email, this.state.password);
  }
}
