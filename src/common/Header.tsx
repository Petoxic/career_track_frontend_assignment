import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AppBar, Avatar, Button, Link, Typography } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SettingsIcon from "@mui/icons-material/Settings";
import theme from "utils/theme";
import users from "api/userAndAuth";

const TextWithIcon = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const LinksContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 10px;
`;

const LogoutButton = styled(Button)`
  color: ${theme.color.primary};
  padding: 0;
  padding-bottom: 1px;
  &:hover {
    color: ${theme.color.primary_hover};
  }
`;

const GuestNavigateButtons = (
  <LinksContainer>
    <Link
      href="/#/login"
      underline="none"
      variant="subtitle1"
      sx={{ color: theme.color.gray.medium }}
    >
      Sign in
    </Link>

    <Link
      href="/#/register"
      underline="none"
      variant="subtitle1"
      sx={{ color: theme.color.gray.medium }}
    >
      Sign up
    </Link>
  </LinksContainer>
);

const UserNavigateButtons: React.FC<{
  logoutHandler: () => void;
  username: string;
  imageUrl: string;
}> = ({ logoutHandler, username, imageUrl }) => {
  const currentUserProfileHandler = () => {
    sessionStorage.setItem("currentUserProfile", username);
  };

  return (
    <LinksContainer>
      <Link
        href="/#"
        underline="none"
        variant="subtitle1"
        sx={{ color: theme.color.black }}
      >
        Home
      </Link>

      <Link
        href="/#/editor"
        underline="none"
        variant="subtitle1"
        sx={{ color: theme.color.gray.medium }}
      >
        <TextWithIcon>
          <EditNoteIcon />
          New Article
        </TextWithIcon>
      </Link>

      <Link
        href="/#/settings"
        underline="none"
        variant="subtitle1"
        sx={{ color: theme.color.gray.medium }}
      >
        <TextWithIcon>
          <SettingsIcon />
          Settings
        </TextWithIcon>
      </Link>

      <Avatar
        src={imageUrl}
        sx={{ width: "1.2em", height: "1.2em", marginBottom: "3px" }}
      />
      {/* <Typography variant="subtitle1" color={theme.color.gray.medium}>
        {username}
      </Typography> */}

      <Link
        href={`/#/profile/${username}`}
        variant="subtitle1"
        underline="none"
        sx={{ color: theme.color.gray.medium }}
        onClick={currentUserProfileHandler}
      >
        {username}
      </Link>

      <LogoutButton onClick={logoutHandler}>Log out</LogoutButton>
    </LinksContainer>
  );
};

const Header: React.FC<{
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isLogin, setIsLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const getUsername = async () => {
    const res = await users.getCurrentUser();
    if (res) {
      setUsername(res.username);
      setImageUrl(res.imageUrl);
    }
  };

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    setIsLogin(false);
    setUsername("");
    setImageUrl("");
    window.location.reload();
  };

  useEffect(() => {
    getUsername();
  }, [isLogin]);

  return (
    <StyledAppBar position="sticky">
      <Link
        href="/#"
        underline="none"
        variant="h5"
        sx={{ color: theme.color.primary, fontWeight: "600" }}
      >
        conduit
      </Link>

      {isLogin ? (
        <UserNavigateButtons
          logoutHandler={logoutHandler}
          username={username}
          imageUrl={imageUrl}
        />
      ) : (
        GuestNavigateButtons
      )}
    </StyledAppBar>
  );
};

export default Header;

const StyledAppBar = styled(AppBar)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 0;
  background-color: ${theme.color.white};
  padding: 15px 10%;
`;
