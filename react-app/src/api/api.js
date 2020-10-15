export const allPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(response => response.json())
};

export const getPostById = (id, search) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
};