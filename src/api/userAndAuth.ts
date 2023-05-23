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

const users = {
  loginUser,
  registerUser,
};

export default users;