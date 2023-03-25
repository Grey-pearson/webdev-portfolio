import React from 'react';

function NavBar({ currentPage, handlePageChange }) {
  return (
    <ul id='bootstrap-overide' className="nav nav-pills">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? ' live' : 'nav-link'}
        >
          AboutMe
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? ' live' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? ' live' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? ' live' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
