import api from "utils/api";

const getGlobalFeeds = async (params?: {}) => {
  try {
    const res = await api.get(
      "http://localhost:3001/api/articles",
      (params = params)
    );
    console.log(res.data.articles);
    return res.data.articles;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getUserFeeds = async () => {
  try {
    const res = await api.get("http://localhost:3001/api/articles/feed");
    return res.data.articles;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const createArticle = async (
  title: string,
  description: string,
  body: string,
  tagList: string[]
) => {
  const article = { title, description, body, tagList };
  try {
    const res = await api.post("http://localhost:3001/api/articles", {
      article,
    });
    return true;
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
  createArticle,
  getArticle,
};

export default articles;
