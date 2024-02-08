import axios from "axios";

export const authCheckRequest = async (token, success = () => {}, error = () => {}) => {
  await axios
    .get("https://dummyjson.com/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data)
    .then(success)
    .catch((err) => {
      console.log(`ERROR https://dummyjson.com/auth/me`, err.message);
      error(err.response.data);
    });
};

export const postRequest = async (url, params, success = () => {}, error = () => {}) => {
  await axios
    .post(url, params)
    .then((res) => res.data)
    .then(success)
    .catch((err) => {
      console.log(`ERROR ${url}`, err.message);
      error(err.response.data);
    });
};

export const getRequest = async (url, params, success = () => {}, error = () => {}) => {
  await axios
    .get(url)
    .then((res) => res.data)
    .then(success)
    .catch((err) => {
      console.log(`ERROR ${url}`, err.message);
      error(err.response.data);
    });
};
