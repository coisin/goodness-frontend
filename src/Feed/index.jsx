import React from 'react';

import {LineChart, XAxis, YAxis, Line, CartesianGrid} from 'recharts';
import Auth from '../utils/auth.js';
import Facebook from '../utils/facebook.js';
import axios from 'axios';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null,
      showRecords: false
    };
    this.data = [
      {
        day: 'Monday', score: 43
      },
      {
        day: 'Tuesday', score: 23
      },
      {
        day: 'Wednesday', score: 65
      },
      {
        day: 'Thursday', score: 98
      },
      {
        day: 'Friday', score: 34
      },
      {
        day: 'Saturday', score: 2
      },
      {
        day: 'Sunday', score: 34
      }
    ];
    this.connectBank = this.connectBank.bind(this);
  }
  getData() {

  }
  render() {
    const data = [
      {text: '7 gallons of petrol'},
      {text: 'life is great'}
    ];
    const recordContent = this.state.showRecords ? <div className='recordList'>
      {data.map((rec) => {
        return <Record rightContent={rec.rightContent} text={rec.text} />
      })}
    </div> : null;
    return <div className='block feedContainer'>
      <div className='feed'>
      <div className='lineChartContainer' ref={el => {this.container = el}}>
      <LineChart width={this.state.width} height={300} data={this.data}>
        <XAxis dataKey="day"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="score" stroke="#7cadfc" />
      </LineChart>
      </div>
      <button onClick={this.connectBank}>Connect Your Bank</button>
	    <button onClick = {this.connectFacebook}>Connect Facebook</button>
    </div>
  </div>
  }
  setContainerWidth() {
    var style = window.getComputedStyle(this.container, null);
    let width = style.getPropertyValue("width");
    width = parseInt(width.substr(0, width.length - 2));
    this.setState({width});
  }
  componentDidMount() {
    this.setContainerWidth();
    window.addEventListener('resize', () => {
      this.setContainerWidth();
    });
  }

  connectFacebook() {
	  Facebook();
  }

  connectBank() {
    this.setState({showRecords: true});
  }
}

class Record extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      rightContent: 0
    };
    this.onChange = this.onChange.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }
  render() {
    let rightContent = this.state.rightContent;
    if(this.state.isEditing) {
      rightContent = <input type='number' value={this.state.rightContent} onChange={this.onChange} />
    }
    return <div className='record'>
      <div className='left'>
        {this.props.text}
      </div>
      <div className='right'>
        {rightContent}
        <button onClick={this.toggleEditing}>{this.isEditing ? 'Confirm' : 'Edit'}</button>
      </div>
    </div>
  }
  toggleEditing() {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }
  onChange(e) {
    this.setState({rightContent: e.target.value});
  }
}
