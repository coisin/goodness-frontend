import React from 'react';

export default class DateOfBirthQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 2010,
      month: "January",
      day: 1
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  render() {
    const years = [];
    const currentYear = new Date().getFullYear();
    for(let year = 1900; year <= currentYear; year++) years.push(year);
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const daysOfMonth = this.getDaysOfMonth(this.state.month);
    return <div className="questionContent">
      <div className='questionTitle'>
        {this.props.question}
      </div>

      <label className='questionSubtitle'>
        Year
      </label>
      <select name="year" onChange={this.onChange} value={this.state.year}>
        {years.map((year) => {
          return <option value={year}>{year}</option>
        })}
      </select>

      <label className='questionSubtitle'>
        Month
      </label>
      <select name="month" onChange={this.onChange} value={this.state.month}>
        {monthsOfYear.map((month) => {
          return <option value={month}>{month}</option>
        })}
      </select>

      <label className='questionSubtitle'>
        Day
      </label>
      <select name="day" onChange={this.onChange} value={this.state.day}>
        {daysOfMonth.map((day) => {
          return <option value={day}>{day}</option>
        })}
      </select>

      <button onClick={this.onClick}>Next Question</button>
    </div>
  }

  getDaysOfMonth(month) {
    const daysOfMonth = [];
    let numberOfDays = 28;
    if(["January", "March", "May", "July", "August", "October", "December"].includes(month)) {
      numberOfDays = 31;
    }
    if(["April", "June", "September", "November"].includes(month)) {
      numberOfDays = 30;
    }
    for(let day = 1; day <= numberOfDays; day++) {
      daysOfMonth.push(day);
    }
    return daysOfMonth;
  }

  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onClick(event) {
    this.props.submitQuestion(this.props.name, this.state, this.props.nextQuestions);
  }
}
