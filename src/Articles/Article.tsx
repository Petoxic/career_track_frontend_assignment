import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import articles from "api/articles";
import profile from "api/profile";
import React, { useEffect, useState } from "react";
import TitleHeader from "./TitleBanner";

const Article: React.FC<{ articleLink: string }> = ({ articleLink }) => {
  const [articleData, setArticleData] = useState({
    slug: "string",
    title: "string",
    description: "string",
    body: "string",
    tagList: ["string"],
    createdAt: "2023-05-25T14:52:20.628Z",
    updatedAt: "2023-05-25T14:52:20.628Z",
    favorited: true,
    favoritesCount: 0,
    author: {
      username: "string",
      bio: "string",
      image: "string",
      following: true,
    },
  });

  const getArticle = async () => {
    const res = await articles.getArticle(articleLink);
    if (res) {
      setArticleData(res);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <ContentContainer>
      <TitleHeader
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
      <Typography variant="subtitle1" sx={{padding: '0 10%'}}>{articleData.body}</Typography>
    </ContentContainer>
  );
};

export default Article;

const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 30px;
`