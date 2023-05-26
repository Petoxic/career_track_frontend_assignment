import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import articles from "api/articles";
import TitleBanner from "./TitleBanner";

const Article: React.FC<{ articleLink: string }> = ({ articleLink }) => {
  const [articleData, setArticleData] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getArticle = async () => {
    const res = await articles.getArticle(articleLink);
    if (res) {
      setArticleData(res);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
      {isLoading ? (
        <Typography variant="subtitle1">Loading...</Typography>
      ) : (
        <ContentContainer>
          <TitleBanner
            title={articleData.title}
            name={articleData.author.username}
            isFollow={articleData.author.following}
            date={articleData.createdAt}
            imageUrl={articleData.author.image}
            isFavorited={articleData.favorited}
            favoritesCounts={articleData.favoritesCount}
            slug={articleData.slug}
            updateHandler={getArticle}
          />
          <Typography variant="subtitle1" sx={{ padding: "0 10%" }}>
            {articleData.body}
          </Typography>
        </ContentContainer>
      )}
    </>
  );
};

export default Article;

const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
