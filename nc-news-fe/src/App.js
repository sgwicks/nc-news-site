import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Article from './components/Article';
import * as MainStyles from './styles/MainStyles';

function App() {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <MainStyles.StyledRouter>
        <ArticleList path='/' />
        <ArticleList path='/articles' />
        <ArticleList path='/topics/:topic_slug' />
        <Article path='/articles/:article_id' />
      </MainStyles.StyledRouter>
      <Footer />
    </div>
  );
}

export default App;
