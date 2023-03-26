import React from 'react';
import randomcollors from './imgs/randomcollors.png'
import background from './imgs/tim-warnock-nf-riverkingcourt-boatexterior-a-3.jpg'

const styles = {
  contanier: {
    display: 'flex',
    margin: '4rem',
    height: '100%',
    backgroundColor: 'green',
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

      <div style={styles.projectCard} className='card'>
        <img src={randomcollors} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>project name</h2>
          <p className='card-text'>project about smth? maybe get rid of this</p>
          <a href="#" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="#" className="btn btn-primary">deployed site</a>
        </div>
      </div>

      <div style={styles.projectCard} className='card'>
        <img src={background} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>project name</h2>
          <p className='card-text'>project about smth? maybe get rid of this</p>
          <a href="#" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="#" className="btn btn-primary">deployed site</a>
        </div>
      </div>

      <div style={styles.projectCard} className='card'>
        <img src={randomcollors} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>project name</h2>
          <p className='card-text'>project about smth? maybe get rid of this</p>
          <a href="#" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="#" className="btn btn-primary">deployed site</a>
        </div>
      </div>

      <div style={styles.projectCard} className='card'>
        <img src={background} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>project name</h2>
          <p className='card-text'>project about smth? maybe get rid of this</p>
          <a href="#" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="#" className="btn btn-primary">deployed site</a>
        </div>
      </div>


      <div style={styles.projectCard} className='card'>
        <img src={randomcollors} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>project name</h2>
          <p className='card-text'>project about smth? maybe get rid of this</p>
          <a href="#" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="#" className="btn btn-primary">deployed site</a>
        </div>
      </div>

      <div style={styles.projectCard} className='card'>
        <img src={background} className='card-img-top' alt='screenshot of the deployed project'></img>
        <div className='card-body'>
          <h2 className='card-title'>project name</h2>
          <p className='card-text'>project about smth? maybe get rid of this</p>
          <a href="#" style={styles.Aspacing} className="btn btn-primary">github</a>
          <a href="#" className="btn btn-primary">deployed site</a>
        </div>
      </div>

    </div>
  );
}
