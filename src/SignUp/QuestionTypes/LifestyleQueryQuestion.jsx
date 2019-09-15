import React from 'react';

export default class SelectQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return <div className='questionContent'>
      <div className='questionSection'>
      <div className='questionTitle'>
        {this.props.question}
      </div>
      <select onChange={this.onChange} value={this.state.value}>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <button onClick={this.onClick}>Next Question</button>
      </div>
    </div>
  }
  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  onClick(event) {
    let nextQuestions = [];
    if(this.state.value === true)
      nextQuestions = this.props.nextQuestions;
    this.props.submitQuestion(null, this.state.value, nextQuestions);
  }
}
