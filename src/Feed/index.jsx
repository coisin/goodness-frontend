import React from 'react';

import {LineChart, XAxis, YAxis, Line, CartesianGrid} from 'recharts';
import Auth from '../utils/auth.js';
import Facebook from '../utils/facebook.js';
import axios from 'axios';
import Footer from '../common/Footer.jsx';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
	};
    this.data = [
      {
        day: 'Monday', score: Math.random() * 1000
      },
      {
        day: 'Tuesday', score: Math.random() * 1000
      },
      {
        day: 'Wednesday', score: Math.random() * 1000
      },
      {
        day: 'Thursday', score: Math.random() * 1000
      },
      {
        day: 'Friday', score: Math.random() * 1000
      },
      {
        day: 'Saturday', score: Math.random() * 1000
      },
      {
        day: 'Sunday', score: Math.random() * 1000
      }
    ];
    this.connectBank = this.connectBank.bind(this);
  }
  getData() {

  }
  render() {
    return <div className='block'>
      <div className='feed' ref={el => {this.container = el}}>
      <div className='lineChartContainer'>
      <LineChart width={this.state.width * .9} height={300} data={this.data}>
        <XAxis dataKey="day"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="score" stroke="#7cadfc" />
      </LineChart>
      </div>
      <button onClick={this.connectBank}>Connect Your Bank</button>
	    <button onClick = {this.connectFacebook}>Connect Facebook</button>
    </div>
	<Footer/>
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
    Auth('Hello World');
  }
}
