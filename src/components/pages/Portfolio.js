import React from 'react';
import Eshop from './imgs/backendEshop.jpg'
import dataTracker from './imgs/dataTracker.jpg'
import noteTaker from './imgs/noteTacker.jpg'
import forcast from './imgs/weatherApp.jpg'
import dailySchedule from './imgs/workDaySchedule.jpg'
import quiz from './imgs/quiz.jpg'

const styles = {
  contanier: {
    display: 'flex',
    margin: '4rem',
    height: '100%',
    alignItems: 'space between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  projectCard: {
    margin: 'auto',
    width: '30%',
  },
  Aspacing: {
    marginRight: '1rem',
  }
};


export default function Portfolio() {


  return (
    <div style={styles.contanier}>
      {/* create project examples then ctrl c/v 
      6 projects
      picture of project
      link to github and the site */}

      {/* Eshop */}
      <div style={styles.projectCard} className='card'>
        <img src={Eshop} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>Back end for an online shop</h2>
          <p className='card-text'>a backend app that can be used to track inventory for an online store</p>
          <a href="https://github.com/Grey-pearson/back-end-E-shop" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="https://watch.screencastify.com/v/1nIzN2AwK0h3W29wbz6B" className="btn btn-primary">tutorial</a>
        </div>
      </div>
      {/* data tracker */}
      <div style={styles.projectCard} className='card'>
        <img src={dataTracker} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>User Data Tracker</h2>
          <p className='card-text'>a project that will let you track the structure of emoplyees and whos in what departmens</p>
          <a href="https://github.com/Grey-pearson/user-data-tracker" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="https://watch.screencastify.com/v/JNmI2H0EbVpeSdBpXwx0" className="btn btn-primary">tutorial</a>
        </div>
      </div>
      {/* note taker */}
      <div style={styles.projectCard} className='card'>
        <img src={noteTaker} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>Note Tacker</h2>
          <p className='card-text'>an app that will let you save notes to a data base for later use</p>
          <a href="https://github.com/Grey-pearson/note-taking-app" style={styles.Aspacing} className="btn btn-primary">github</a>
        </div>
      </div>
      {/* forcast */}
      <div style={styles.projectCard} className='card'>
        <img src={forcast} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>5 Day Forcast</h2>
          <p className='card-text'>an app that will show you a 5 day forcast from whatever location you'd like</p>
          <a href="https://github.com/Grey-pearson/5-day-forcast" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="https://grey-pearson.github.io/5-day-forcast/" className="btn btn-primary">deployed site</a>
        </div>
      </div>
      {/* daily schedule */}
      <div style={styles.projectCard} className='card'>
        <img src={dailySchedule} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>Daily Scedule Planner</h2>
          <p className='card-text'>this project will save notes or events by the hour locally to your browser, updates with the time of day</p>
          <a href="https://github.com/Grey-pearson/w5-daily-scedule" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="https://grey-pearson.github.io/w5-daily-scedule/" className="btn btn-primary">deployed site</a>
        </div>
      </div>
      {/* quiz */}
      <div style={styles.projectCard} className='card'>
        <img src={quiz} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>Quiz App</h2>
          <p className='card-text'>a short quiz that tracks scores and has a built in timer</p>
          <a href="https://github.com/Grey-pearson/w4-quiz" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="https://grey-pearson.github.io/w4-quiz/" className="btn btn-primary">deployed site</a>
        </div>
      </div>

    </div>
  );
}
