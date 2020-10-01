import React, { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import './app.css';
import { render } from '@testing-library/react';

function App() {
  const pages = [
    {
      slug: 'about',
      title: 'About Me',
    },
    {
      slug: 'portfolio',
      title: 'Portfolio',
    },
    {
      slug: 'contact',
      title: 'Contact',
    },
    {
      slug: 'resume',
      title: 'Resume',
    },
  ];
  const [currentPage, setCurrentPage] = useState('about');

  function renderPage() {
    switch (currentPage) {
      case 'portfolio':
        return 'Portfolio';
      case 'contact':
        return 'Contact';
      case 'resume':
        return 'Resume';
      case 'about':
      default:
        return <AboutMe />;
    }
  }

  return (
    <>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
        id="nav"
      />
      <main id="content">{renderPage()}</main>
      <Footer id="footer" />
    </>
  );
}

export default App;
