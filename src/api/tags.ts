import api from "utils/api";

const getTags = async () => {
  try {
    const res = await api.get("http://localhost:3001/api/tags");
    return res.data.tags;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const tags = {
  getTags,
};

export default tags;
