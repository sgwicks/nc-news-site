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

export const getArticles = async (topic, sort_by, order) => {
  const {
    data: { articles }
  } = await request.get('/articles', { params: { topic, sort_by, order } });
  return articles;
};

export const getArticleById = async (id) => {
  const {
    data: { article }
  } = await request.get(`/articles/${id}`);
  return article;
};

export const getCommentsByArticleId = async (id) => {
  const {
    data: { comments }
  } = await request.get(`/articles/${id}/comments`);
  return comments;
};

export const postCommentToArticleId = async (id, username, body) => {
  return request.post(`/articles/${id}/comments`, {
    username,
    body
  });
};

export const patchVotesById = async (type, id, num) => {
  return request.patch(`/${type}/${id}/`, { inc_votes: num });
};

export const deleteCommentById = async (comment_id) => {
  return request.delete(`comments/${comment_id}`);
};
