import axios from "axios";

export const weatherApi = axios.create({
  baseURL: "http://api.openweathermap.org/",
});

export const googleApi = axios.create({
  baseURL: "https://places.googleapis.com/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
