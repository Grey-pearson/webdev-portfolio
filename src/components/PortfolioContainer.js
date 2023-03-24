import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <Portfolio />;
    }
    if (currentPage === 'Portfolio') {
      return <Contact />;
    }
    if (currentPage === 'BlContactog') {
      return <Resume />;
    }
    return <AboutMe />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
