import React from 'react';
import EventBox from './EventBox';

export default class Evenys extends React.Component {
  constructor(props) {
    super(props);
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

    return <div className='block eventsPage'>
      <div className='eventBoxes'>
        { eventBoxes.map((eventBox) => {
          return <EventBox tagline={eventBox.tagline} imgSrc={eventBox.imgSrc} />
        }) }
      </div>
    </div>
  }
}
