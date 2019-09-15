import React from 'react';

import Question from './QuestionTypes/Question';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [{
        type:'lifestyle',
        question: 'Would you like to be asked questions about your lifestyle?',
        nextQuestions: this.getInitialQuestions()
      }],
      records: {}
    };

    this.submitQuestion = this.submitQuestion.bind(this);
  }
  render() {
    if(this.state.questions.length === 0)
      return null;

    const currentQuestion = this.state.questions[this.state.questions.length - 1];
    const key = currentQuestion.name;
    return <div className='quiz'>
      <Question {...currentQuestion} submitQuestion={this.submitQuestion} key={key} />
    </div>
  }

  submitQuestion(name, value, newQuestions) {
    if(name !== null) {
      let records = this.state.records;
      records[name] = value;
      this.setState({records});
    }

    let questions = this.state.questions;
    questions.pop();

    for(let index = newQuestions.length - 1; index >= 0; index--) {
      questions.push(newQuestions[index]);
    }
    this.setState({questions});

    if(this.state.questions.length === 0) {
      this.props.submitQuiz(this.state.records);
    }
  }

  getInitialQuestions() {
    return [
      {
        type: 'discreteslider',
        question: 'How many people live in your household?',
        minValue: 0,
        maxValue: 5,
        name: 'people-in-household',
        nextQuestions: [],
        marks: [
          {
            label: '1',
            value: 1
          },
          {
            label: '2',
            value: 2
          },
          {
            label: '3',
            value: 3
          },
          {
            label: '4',
            value: 4
          },
          {
            label: '5',
            value: 5
          }
        ]
      },
      {
        type: 'discreteslider',
        question: 'What is your gross annual household income?',
        minValue: 1,
        maxValue: 11,
        name: 'gross-annual-household-income',
        nextQuestions: [],
        marks: [
          {
            label: 'Avg',
            value: 1
          },
          {
            label: '<10k',
            value: 2
          },
          {
            label: '10k',
            value: 3
          },
          {
            label: '20k',
            value: 4
          },
          {
            label: '30k',
            value: 5
          },
          {
            label: '40k',
            value: 6
          },
          {
            label: '50k',
            value: 7
          },
          {
            label: '60k',
            value: 8
          },
          {
            label: '80k',
            value: 9
          },
          {
            label: '100k',
            value: 10
          },
          {
            label: '120k+',
            value: 11
          },
        ]
      },
      {
        type: 'vehicles',
        question: 'How do you get around?',
        nextQuestions: [],
        name: 'vehicles'
      },
      {
        type: 'home',
        question: 'How much do you use in your home?',
        nextQuestions: [],
        name: 'home'
      }
    ];
  }
}
