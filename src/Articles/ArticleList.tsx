import React from "react";
import { styled } from "@mui/material/styles";

import theme from "utils/theme";
import HomePageBanner from "./HomePageBanner";
import PopularTags from "./PopularTags";
import Feeds from "./Feeds";

const ArticleList: React.FC<{setArticleLink: React.Dispatch<React.SetStateAction<string>>}> = ({setArticleLink}) => {
  return (
    <>
      <HomePageBanner />
      <ContentContainer>
        <Feeds setArticleLink={setArticleLink} />
        <PopularTags />
      </ContentContainer>
    </>
  );
};

export default ArticleList;

const ContentContainer = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  padding: 2% 5%;
  column-gap: 10px;
`;
