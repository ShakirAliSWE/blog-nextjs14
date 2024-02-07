const HOST_URL = "https://api.slingacademy.com/v1/sample-data";

export const getBlogs = async (success) => {
  await fetch(`${HOST_URL}/blog-posts`)
    .then((res) => res.json())
    .then((res) => res.blogs)
    .then(success);
};
