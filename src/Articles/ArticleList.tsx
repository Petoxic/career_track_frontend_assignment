import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar, Link, Typography } from "@mui/material";

import theme from "theme/theme";
import HomePageBanner from "./HomePageBanner";
import PopularTags from "./PopularTags";

const ArticleList: React.FC<{}> = () => {
  return (
    <>
      <HomePageBanner />
      <PopularTags/>
    </>
  );
};

export default ArticleList;
