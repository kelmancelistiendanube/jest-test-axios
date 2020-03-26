var axios = require("axios").default;

var instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

module.exports = instance;
