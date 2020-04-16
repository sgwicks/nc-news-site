import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Article from './components/Article';
import { StyledApp, StyledRouter } from './styles/AppStyles';

function App() {
  return (
    <StyledApp>
      <Header />
      <Nav />
      <StyledRouter>
        <ArticleList path='/' />
        <ArticleList path='/articles' />
        <ArticleList path='/topics/:topic_slug' />
        <Article path='/articles/:article_id' />
      </StyledRouter>
      <Footer />
    </StyledApp>
  );
}

export default App;
