import React from 'react';
import Slider from '@material-ui/core/Slider';

export default class HomeQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      electricityCost: 0,
      electricityPercentage: 0,
      naturalGasCost: 0,
      heatingOilCost: 0,
      livingSpaceArea: 0,
      waterUsagePercentage: 0,
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
  }
  render() {
    const electricityMarks = [
      {
        label: '0',
        value: 0
      },
      {
        label: '20',
        value: 20
      },
      {
        label: '40',
        value: 40
      },
      {
        label: '60',
        value: 60
      },
      {
        label: '80',
        value: 80
      },
      {
        label: '100',
        value: 100
      }
    ];

    const waterMarks = [
      {
        label: '0',
        value: 0
      },
      {
        label: '1x',
        value: 100
      },
      {
        label: '2x',
        value: 200
      },
      {
        label: '3x',
        value: 300
      }
    ];

    return <div className='questionContent'>
      <div className='questionSection'>
        <div className='questionTitle'>
          {this.props.question}
        </div>

        <div className='questionSubtitle'>Electricity</div>
        <div className='formGroup'>
          <input type='number' name='electricityCost' value={this.state.electricityCost} onChange={this.onChange} />
          <span>$</span>
          <span>/yr</span>
        </div>
        <div className='highlightedSection'>
          Percentage purchased from a clean energy program: {this.state.electricityPercentage} %
        </div>
        <div className='sliderContainer'>
          <Slider marks={electricityMarks} min={0} max={100} defaultValue={0} onChange={(event, value) => this.onSliderChange('electricityPercentage', value)} />
        </div>
      </div>

      <div className='questionSection'>
        <div className='questionSubtitle'>Natural Gas</div>
        <div className='formGroup'>
          <input type='number' name='naturalGasCost' value={this.state.naturalGasCost} onChange={this.onChange} />
          <span>$</span>
          <span>/yr</span>
        </div>

        <div className='questionSubtitle'>Heating Oil & Other Fuels</div>
        <div className='formGroup'>
          <input type='number' name='heatingOilCost' value={this.state.heatingOilCost} onChange={this.onChange} />
          <span>$</span>
          <span>/yr</span>
        </div>

        <div className='questionSubtitle'>Living space area</div>
          <div className='formGroup'>
            <input type='number' name='livingSpaceArea' value={this.state.livingSpaceArea} onChange={this.onChange} />
            <span>$</span>
            <span>ft2</span>
          </div>
      </div>

      <div className='questionSection'>
        <div className='questionSubtitle'>
          Water Usage
        </div>
        <div className='highlightedSection'>
          {this.state.waterUsagePercentage} % of similar households
        </div>
        <div className='sliderContainer'>
          <Slider marks={waterMarks} min={0} max={300} defaultValue={0} onChange={(event, value) => this.onSliderChange('waterUsagePercentage', value)} />
        </div>
        <button onClick={this.onClick}>Next Question</button>
      </div>
    </div>
  }
  onClick() {
    console.log(this.state);
    this.props.submitQuestion(this.props.name, this.state, this.props.nextQuestions);
  }
  onSliderChange(name, value) {
    this.setState({
      [name]: value
    });
  }
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
}
