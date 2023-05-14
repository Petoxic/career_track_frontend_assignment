import React from "react";
import styled from "@emotion/styled";
import { AppBar, Link, Typography } from "@mui/material";
import theme from "theme/theme";

const Footer: React.FC<{}> = () => {
  return (
    <StyledAppBar position="fixed">
      <Link
        href="/#"
        underline="none"
        variant="subtitle1"
        sx={{ color: theme.color.primary, fontWeight: "600" }}
      >
        conduit
      </Link>

      <Typography variant="subtitle1" sx={{ color: theme.color.gray.dark }}>
        An interactive learning project from{" "}
        <Link
          href="https://thinkster.io"
          underline="none"
          sx={{ color: theme.color.primary }}
        >
          Thinkster.
        </Link>{" "}
        Code & design licensed under MIT.
      </Typography>
    </StyledAppBar>
  );
};

export default Footer;

const StyledAppBar = styled(AppBar)`
  width: 100%;
  display: flex;
  flex-direction: row;
  top: auto;
  bottom: 0;
  background-color: ${theme.color.gray.light};
  padding: 15px 10%;
  gap: 10px;
`;
