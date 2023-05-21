import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Link, Typography } from "@mui/material";

import theme from "utils/theme";
import HomePageBanner from "./HomePageBanner";
import PopularTags from "./PopularTags";
import Feeds from "./Feeds";

const ArticleList: React.FC<{}> = () => {
  return (
    <>
      <HomePageBanner />
      <ContentContainer>
        <Feeds />
        <PopularTags />
      </ContentContainer>
    </>
  );
};

export default ArticleList;

const ContentContainer = styled("div")`
  display: flex;
  flex-direction: row;
`;
