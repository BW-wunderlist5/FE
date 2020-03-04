import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
<<<<<<< HEAD
    baseURL: "https://reqres.in/api/users/2",
=======
    baseURL:
      "https://cors-anywhere.herokuapp.com/wunderlist5production.herokuapp.com/api/",
>>>>>>> 66337a9c0c2bf968a35eb479a8fd935779f43561
    headers: {
      Authorization: window.localStorage.getItem("token")
    }
  });
};
