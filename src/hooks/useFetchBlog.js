import { useState, useEffect } from "react";

const HOST_URL = "https://api.slingacademy.com/v1/sample-data";

const useFetchBlog = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const response = await fetch(`${HOST_URL}/blog-posts/${id}`, { cache: "force-cache" });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlog(data?.blog);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { isLoading, isError, blog };
};

export default useFetchBlog;
