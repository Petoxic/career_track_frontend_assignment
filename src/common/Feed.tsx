import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import FavoriteIcon from "@mui/icons-material/Favorite";

import theme from "utils/theme";
import { Avatar, Link, Typography } from "@mui/material";
import { create } from "domain";
import favorites from "api/favorites";

const AutherNameContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const ProfileContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const FavoriteContainer = styled("button")<{
  primary: string,
  secondary: string
}>`
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.primary};
  border-color: ${(props) => props.secondary};
  border-style: solid;
  border-radius: 5px;
  padding: 5px;
`;

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

const AutherName: React.FC<{ name: string; date: string }> = ({
  name,
  date,
}) => {
  return (
    <AutherNameContainer>
      <Typography variant="subtitle1" sx={{ color: theme.color.primary }}>
        {name}
      </Typography>
      <Typography variant="subtitle2" sx={{ color: theme.color.gray.medium }}>
        {date}
      </Typography>
    </AutherNameContainer>
  );
};

const AutherProfile: React.FC<{
  name: string;
  date: string;
  imageUrl: string;
}> = ({ name, date, imageUrl }) => {
  const formattedDate = dayjs(date).format("D MMMM YYYY");
  return (
    <ProfileContainer>
      <Avatar src={imageUrl} />
      <AutherName name={name} date={formattedDate} />
    </ProfileContainer>
  );
};

const FavoriteButton: React.FC<{
  isFavorited: boolean;
  favoritesCounts: number;
  slug: string;
  fetchFeeds: () => Promise<void>;
}> = ({ isFavorited, favoritesCounts, slug, fetchFeeds }) => {
  const favoriteHandler = () => {
    if (isFavorited) {
      favorites.unfavoriteArticles(slug);
    } else {
      favorites.favoriteArticles(slug);
    }
    fetchFeeds();
  };

  const primaryColor: string = isFavorited
    ? theme.color.primary
    : theme.color.white;
  const secondaryColor: string = isFavorited
    ? theme.color.white
    : theme.color.primary;
  return (
    <FavoriteContainer
      primary={secondaryColor}
      secondary={primaryColor}
      onClick={favoriteHandler}
    >
      <FavoriteIcon sx={{ color: primaryColor }} />
      <Typography variant="subtitle2" sx={{ color: primaryColor }}>
        {favoritesCounts}
      </Typography>
    </FavoriteContainer>
  );
};

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
  fetchFeeds: () => Promise<void>;
}> = ({
  username,
  imageUrl,
  title,
  description,
  createdAt,
  isFavorited,
  favoritesCount,
  slug,
  fetchFeeds,
}) => {
  return (
    <ContentContainer>
      <FeedContainer>
        <AutherProfile name={username} date={createdAt} imageUrl={imageUrl} />
        <FavoriteButton
          isFavorited={isFavorited}
          favoritesCounts={favoritesCount}
          slug={slug}
          fetchFeeds={fetchFeeds}
        />
      </FeedContainer>
      <ArticleDetails title={title} description={description} />
      <Link
        href={`/#/${slug}`}
        underline="none"
        variant="subtitle1"
        sx={{ color: theme.color.gray.medium }}
      >
        Read more...
      </Link>
    </ContentContainer>
  );
};

export default Feed;
