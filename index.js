console.log("initial");

var typicodeFetch = require("./api/typicodes");

async function findPostById() {
  try {
    const { data } = await typicodeFetch.findPostById(1);
    console.log(data);
  } catch (error) {
    console.log(error.response.status);
  }
}

async function findAllPost() {
  try {
    const { data } = await typicodeFetch.findAllPost();
    console.log(data.length);
  } catch (error) {
    console.log(error.response.status);
  }
}
async function createPost() {
  try {
    const { data } = await typicodeFetch.createPost({
      title: "foo",
      body: "bar",
      userId: 1
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.status);
  }
}
async function updatePost() {
  try {
    const { data } = await typicodeFetch.updatePost(1, {
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.status);
  }
}
async function modifyPost() {
  try {
    const { data } = await typicodeFetch.modifyPost(1, {
      title: "foo"
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.status);
  }
}
async function deletePost() {
  try {
    const { data } = await typicodeFetch.deletePost(1);
    console.log(data);
  } catch (error) {
    console.log(error.response.status);
  }
}

findPostById();
findAllPost();
createPost();
updatePost();
modifyPost();
deletePost();
