import axios from "axios";

// 获取首页文章
export const getBarArticle = (params?: object) =>
  axios.get("./bar.json", { params });

// 登录
export const login = (params?: object) =>
  axios.get("./login.json", { params });
