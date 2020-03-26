var axios = require("./index");

module.exports = typicodeFetch = {
  findPostById: function(id) {
    return axios.get(`/posts/${id}`);
  },
  findAllPost: function() {
    return axios.get(`/posts`);
  },
  createPost: function(payload) {
    return axios.post(`/posts`, payload);
  },
  updatePost: function(id, payload) {
    return axios.put(`/posts/${id}`, payload);
  },
  modifyPost: function(id, payload) {
    return axios.patch(`/posts/${id}`, payload);
  },
  deletePost: function(id) {
    return axios.delete(`/posts/${id}`);
  }
};
