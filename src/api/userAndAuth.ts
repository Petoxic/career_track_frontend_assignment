import api from "utils/api";

const loginUser = async (email: string, password: string) => {
  const user = { email, password };
  try {
    const res = await api.post("http://localhost:3001/api/users/login", {
      user,
    });
    sessionStorage.setItem("token", res.data.user.token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const user = { username, email, password };
  try {
    const res = await api.post("http://localhost:3001/api/users", { user });
    sessionStorage.setItem("token", res.data.user.token);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getCurrentUser = async () => {
  try {
    const res = await api.get("http://localhost:3001/api/user");
    return { username: res.data.user.username, imageUrl: res.data.user.image };
  } catch (error) {
    return false;
  }
};

const updateCurrentUser = async (
  username: string,
  email: string,
  bio: string,
  imageUrl: string
) => {
  const token = sessionStorage.getItem("token");
  const user = { email, token, username, bio, image: imageUrl };
  try {
    const res = await api.put("http://localhost:3001/api/user", { user });
    return res.data.user;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const users = {
  loginUser,
  registerUser,
  getCurrentUser,
  updateCurrentUser,
};

export default users;
