import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Article from './components/Article';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Router>
        <ArticleList path='/' />
        <ArticleList path='/articles' />
        <ArticleList path='/topics/:topic_slug' />
        <Article path='/articles/:article_id' />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
