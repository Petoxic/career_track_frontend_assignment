import api from "utils/api";

const favoriteArticles = async (slug: string) => {
  try {
    const res = await api.post(
      `http://localhost:3001/api/articles/${slug}/favorite`,
      {
        slug,
      }
    );
    return res.data.article;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const unfavoriteArticles = async (slug: string) => {
  try {
    const res = await api.delete(
      `http://localhost:3001/api/articles/${slug}/favorite`,
      {
        slug,
      }
    );
    return res.data.article;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const favorites = {
  favoriteArticles,
  unfavoriteArticles,
};

export default favorites;
