import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://reqres.in/api/users/2",
    headers: {
      Authorization: window.localStorage.getItem("token")
    }
  });
};
