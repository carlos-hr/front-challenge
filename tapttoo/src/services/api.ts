import axios from "axios";

export const api = axios.create({
  baseURL: "https://front.evob.dev.marcomapa.com/front_challenge/",
});
