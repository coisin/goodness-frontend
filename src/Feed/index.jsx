import React from 'react';

import {LineChart, XAxis, YAxis, Line, CartesianGrid} from 'recharts';
import Auth from '../utils/auth.js';
import Facebook from '../utils/facebook.js';
import axios from 'axios';
import EventBox from './EventBox';

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
    const eventBoxes = [
      {
        imgSrc: 'https://randomuser.me/api/portraits/men/20.jpg',
        tagline: 'John Ryan commited to a vegan meal today!'
      },
      {
        imgSrc: 'https://randomuser.me/api/portraits/men/75.jpg',
        tagline: 'Connor Dooley just bought a Tesla!'
      },
      {
        imgSrc: 'https://randomuser.me/api/portraits/men/87.jpg',
        tagline: 'Jacob Sarorious started a vegetarian diet'
      },
      {
        imgSrc: 'https://randomuser.me/api/portraits/men/7.jpg',
        tagline: 'Sam Smith recycled today!'
      },
      {
        imgSrc: 'https://randomuser.me/api/portraits/men/3.jpg',
        tagline: 'John McCarthy switched to free range eggs!'
      }
    ];

    return <div className='block feedContainer'>
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
      <div className='eventBoxes'>
        { eventBoxes.map((eventBox) => {
          return <EventBox tagline={eventBox.tagline} imgSrc={eventBox.imgSrc} />
        }) }
      </div>
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
    Auth('Hello World');
  }
}
