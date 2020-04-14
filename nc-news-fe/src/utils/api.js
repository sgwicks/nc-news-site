import axios from 'axios';

const request = axios.create({
  baseURL: 'https://nc-news-now.herokuapp.com/api/'
});

export const getTopics = async () => {
  const {
    data: { topics }
  } = await request.get('/topics');
  return topics;
};

export const getArticles = async (topic) => {
  const {
    data: { articles }
  } = await request.get('/articles', { params: { topic } });
  return articles;
};
