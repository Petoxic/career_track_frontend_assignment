import React from "react";
import styled from "@emotion/styled";
import { AppBar, Link } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SettingsIcon from "@mui/icons-material/Settings";
import theme from "utils/theme";

const TextWithIcon = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const NavigateButtons = (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-end",
    }}
  >
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
  </div>
);

const Header: React.FC<{}> = () => {
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

      {NavigateButtons}
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
