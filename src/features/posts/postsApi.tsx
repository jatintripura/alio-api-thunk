export const getPosts = async () => {
  const respose = await fetch("https://jsonplaceholder.typicode.com/posts");
  return respose.json();
};
