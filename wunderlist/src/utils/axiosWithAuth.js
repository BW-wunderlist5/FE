import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://wunderlist5production.herokuapp.com/api/ ",
    headers: {
      Authorization: window.localStorage.getItem("token")
    }
  });
};
