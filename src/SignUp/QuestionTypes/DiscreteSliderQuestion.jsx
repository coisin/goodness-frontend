import React from 'react';
import Slider from '@material-ui/core/Slider';

export default class DiscreteSliderQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.minValue
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    return <div className='questionContent slider'>
      <div className='questionSection'>
      <div className='questionTitle'>
        {this.props.question}
      </div>
      <div className='sliderContainer'>
        <Slider defaultValue={this.state.value} onChangeCommitted={this.onChange} marks={this.props.marks} min={this.props.minValue} max={this.props.maxValue} step={1} />
      </div>
      <button onClick={this.onClick}>Next Question</button>
      </div>
    </div>
  }
  onChange(event, value) {
    this.setState({value});
  }
  onClick(event) {
    this.props.submitQuestion(this.props.name, this.state.value, this.props.nextQuestions);
  }
}
