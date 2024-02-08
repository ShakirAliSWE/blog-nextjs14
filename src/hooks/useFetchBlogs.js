import { useState, useEffect } from "react";

const HOST_URL = "https://api.slingacademy.com/v1/sample-data";

const useFetchBlogs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const response = await fetch(`${HOST_URL}/blog-posts`, { cache: "force-cache" });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setBlogs(data?.blogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, blogs };
};

export default useFetchBlogs;
