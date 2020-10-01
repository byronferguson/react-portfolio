import React, { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import AboutMe from './pages/AboutMe';
import './app.css';

function App() {
  const pages = [{}];
  const [currentPage, setCurrentPage] = useState();

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} id="nav" />
      <main id="content">
        <AboutMe />
      </main>
      <Footer id="footer" />
    </>
  );
}

export default App;
