import api from "utils/api";

const getProfile = async (username: string) => {
  try {
    const res = await api.get(
      `http://localhost:3001/api/profiles/${username}`,
      { username }
    );
    return res.data.profile;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const followUser = async (username: string) => {
  try {
    const res = await api.post(
      `http://localhost:3001/api/profiles/${username}/follow`,
      { username }
    );
    return res.data.profile;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const unfollowUser = async (username: string) => {
  try {
    const res = await api.delete(
      `http://localhost:3001/api/profiles/${username}/follow`,
      { username }
    );
    return res.data.profile;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const profile = {
  getProfile,
  followUser,
  unfollowUser,
};

export default profile;
