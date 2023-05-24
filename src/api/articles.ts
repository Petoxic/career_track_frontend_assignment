import api from "utils/api";

const getGlobalFeeds = async () => {
  try {
    const res = await api.get("http://localhost:3001/api/articles");
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

const articles = {
  getGlobalFeeds,
  getUserFeeds,
};

export default articles;
