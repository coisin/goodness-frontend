import React from 'react';
import axios from 'axios';

import Quiz from './Quiz';
import SignUpForm from './SignUpForm';
import AuthService from '../common/AuthService';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizCompleted: false
    };
    this.onQuizSubmission = this.onQuizSubmission.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    let content;
    if(!this.state.quizCompleted) {
      content = <Quiz submitQuiz={this.onQuizSubmission} />;
    } else {
      content = <SignUpForm onSubmit={this.onSubmit} />
    }
    return <div className='block signUpContainer'>
      <div className='signUp'>
        {content}
      </div>
    </div>
  }
  onQuizSubmission(answers) {
    axios.post('/api/init', {
      ...answers
    });
    this.setState({
      quizCompleted: true,
    });
  }
  onSubmit(email, password) {
    
  }
}
