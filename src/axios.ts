import axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "fecf5586-aebc-48e0-9784-e1c7e9bac676",
  },
});

export default instanse;
