import axios from "axios";

export const getBarArticle = (params?: object) =>
  axios.get("./bar.json", { params });
