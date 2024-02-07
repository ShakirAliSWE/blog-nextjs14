"use server";
import { useState, useEffect } from "react";
const HOST_URL = "https://api.slingacademy.com/v1/sample-data";

const useFetch = (endPoint) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);
    await fetch(`${HOST_URL}/${endPoint}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        setData(res);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchData();
    console.log(`${HOST_URL}/${endPoint}`);
  }, [endPoint]);

  return { isLoading, isError, data };
};

export default useFetch;
