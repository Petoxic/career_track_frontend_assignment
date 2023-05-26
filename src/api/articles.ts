import api from "utils/api";

const getGlobalFeeds = async (props?: {}) => {
  try {
    const res = await api.get("http://localhost:3001/api/articles", {props});
    return res.data.articles;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getUserFeeds = async () => {
  try {
    const res = await api.get("http://localhost:3001/api/articles/feed");
    return res.data.article;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getArticle = async (slug: string) => {
  try {
    const res = await api.get(`http://localhost:3001/api/articles/${slug}`);
    return res.data.article;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const articles = {
  getGlobalFeeds,
  getUserFeeds,
  getArticle,
};

export default articles;
