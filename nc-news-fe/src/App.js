import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Router>
        <Articles path='/' />
        <Articles path='/articles' />
        <Articles path='/topics/:topic_slug' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
