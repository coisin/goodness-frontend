import React from 'react';

export default class SelectQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.options[0].value
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
        {this.props.options.map(({value, display}) => {
          return <option value={value}>{display}</option>;
        })}
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
    this.props.submitQuestion(this.props.name, this.state.value, this.props.nextQuestions);
  }
}
