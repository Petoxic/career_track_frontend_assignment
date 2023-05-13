import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Link, Typography } from "@mui/material";

import theme from "theme/theme";

const ArticleList: React.FC<{}> = () => {
  return (
    <>
      <HomePage>
        <Typography
          variant="h3"
          sx={{ color: theme.color.white, fontWeight: "600" }}
        >
          conduit
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: theme.color.white, fontWeight: "200" }}
        >
          A place to share your knowledge.
        </Typography>
      </HomePage>
    </>
  );
};

export default ArticleList;

const HomePage = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.primary};
  padding: 32px;
`;
