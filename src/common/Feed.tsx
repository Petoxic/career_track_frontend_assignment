import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";

import theme from "utils/theme";
import { Avatar, Link, Typography } from "@mui/material";
import favorites from "api/favorites";
import AutherProfile from "./AutherProfile";
import FavoriteButton from "./FavoriteButton";

const FeedContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContentContainer = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: solid ${theme.color.gray.light};
  padding: 10px;
`;

const ArticleDetails: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div>
      <Typography variant="h6" sx={{ color: theme.color.black }} noWrap={true}>
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: theme.color.gray.medium }}
        noWrap={true}
      >
        {description}
      </Typography>
    </div>
  );
};

const Feed: React.FC<{
  username: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: string;
  isFavorited: boolean;
  favoritesCount: number;
  slug: string;
  updateHandler: () => Promise<void>;
  setArticleLink: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  username,
  imageUrl,
  title,
  description,
  createdAt,
  isFavorited,
  favoritesCount,
  slug,
  updateHandler,
  setArticleLink,
}) => {
  const linkHandler = (slug: string) => {
    setArticleLink(slug)
    sessionStorage.setItem('slug', slug);
  }

  return (
    <ContentContainer>
      <FeedContainer>
        <AutherProfile name={username} date={createdAt} imageUrl={imageUrl} />
        <FavoriteButton
          isFavorited={isFavorited}
          favoritesCounts={favoritesCount}
          slug={slug}
          updateHandler={updateHandler}
        />
      </FeedContainer>
      <ArticleDetails title={title} description={description} />
      <Link
        href={`/#/${slug}`}
        underline="none"
        variant="subtitle1"
        sx={{ color: theme.color.gray.medium }}
        onClick={() => linkHandler(slug)}
      >
        Read more...
      </Link>
    </ContentContainer>
  );
};

export default Feed;
