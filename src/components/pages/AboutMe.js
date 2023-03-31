import React from 'react';
import picture from './imgs/portrait.jpg'
import '../../styles/AboutMe.css'

export default function AboutMe() {
  return (
    <div>
      <h1>About me</h1>
      <div className='parent'>
        <img className='child' src={picture}></img>
        <p className='child'>
          My name is Grey Pearson im a
          creative and driven developer seeking to contribute to a code base with a team. I have IT expeince, know how to use react, bootstrap, mongodb, and sevral tools.
          I hope you enjoy looking through my protfollio site and see what i have been working on
        </p>
      </div>
    </div>
  );
}
