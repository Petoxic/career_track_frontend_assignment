import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

import theme from "theme/theme";

const ArticleList: React.FC<{}> = () => {
  return (
    <HomePage>
      <WhiteTypography variant="h3" sx={{fontWeight: '600'}}>conduit</WhiteTypography>
      <WhiteTypography variant="h5" sx={{fontWeight: '200'}}>
        A place to share your knowledge.
      </WhiteTypography>
    </HomePage>
  );
};

export default ArticleList;

const WhiteTypography = styled(Typography)`
  color: ${theme.color.white};
`;

const HomePage = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.primary};
  padding: 32px;
`;
