import React from 'react';

export default function EventBox(props) {
  return <div className='eventBoxContainer'>
    <div className='eventBox'>
      <img src={props.imgSrc} />
      <p className='tagline'>{props.tagline}</p>
    </div>
  </div>
}
