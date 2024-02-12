import { useState, useEffect } from "react";

const HOST_URL = "https://api.slingacademy.com/v1/sample-data";

const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);

      try {
        const response = await fetch(`${HOST_URL}/users`, { cache: "force-cache" });
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data?.users);
      } catch (error) {
        console.error("Error fetching users:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, isError, users };
};

export default useFetchUsers;
