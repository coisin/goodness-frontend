import React from 'react';
import Slider from '@material-ui/core/Slider';

export default class VehiclesQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fuelType: 'gasoline',
      milesCost: 0,
      milesPerG: 10,
      airTravelMilesCost: 0,
      publicTransitMilesCost: 0
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
  }
  render() {
    const marks = [
      {
        label: '10',
        value: 10
      },
      {
        label: '25',
        value: 25
      },
      {
        label: '40',
        value: 40
      },
      {
        label: '55',
        value: 55
      },
      {
        label: '70',
        value: 70
      },
      {
        label: '85',
        value: 85
      },
      {
        label: '100',
        value: 100
      },
      {
        label: '115',
        value: 115
      },
    ];

    return <div className='questionContent'>
      <div className='questionSection'>
      <div className='questionTitle'>
        {this.props.question}
      </div>
      <div className='formGroup'>
        <select name='fuelType' onChange={this.onChange} value={this.state.fuelType}>
          <option value='gasoline'>Gasoline</option>
          <option value='diesel'>Diesel</option>
          <option value='electric'>Electric</option>
        </select>
        <input name='milesCost' type='number' onChange={this.onChange} value={this.state.milesCost} />
        <span className='units'>mi/yr</span>
      </div>
      <div className='highlightedSection'>{this.state.milesPerG} mpg</div>
      <div className='sliderContainer'>
        <Slider onChange={this.onSliderChange} min={10} max={115} marks={marks} defaultValue={10} />
      </div>

      <div className='questionSubtitle'>Public Transit</div>
      <div className='formGroup'>
        <input type='number' value={this.state.publicTransitMilesCost} name='publicTransitMilesCost' onChange={this.onChange} />
        <span>mi/yr</span>
      </div>

      <div className='questionSubtitle'>Air Travel</div>
      <div className='formGroup'>
        <input type='number' value={this.state.airTravelMilesCost} name='airTravelMilesCost' onChange={this.onChange} />
        <span>mi/yr</span>
      </div>

      <button onClick={this.onClick}>Next Question</button>
      </div>
    </div>
  }
  onClick() {
    this.props.submitQuestion(this.props.name, this.state, this.props.nextQuestions);
  }
  onSliderChange(event, value) {
    this.setState({
      milesPerG: value
    });
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
