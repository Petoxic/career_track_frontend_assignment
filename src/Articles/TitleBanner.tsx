import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import AutherProfile from "common/AutherProfile";
import FavoriteButton from "common/FavoriteButton";
import FollowButton from "common/FollowButton";
import theme from "utils/theme";

const TitleBanner: React.FC<{
  title: string;
  name: string;
  isFollow: boolean;
  date: string;
  imageUrl: string;
  isFavorited: boolean;
  favoritesCounts: number;
  slug: string;
  updateHandler: () => Promise<void>;
}> = ({
  title,
  name,
  isFollow,
  date,
  imageUrl,
  isFavorited,
  favoritesCounts,
  slug,
  updateHandler,
}) => {
  return (
    <Banner>
      <Typography variant="h5" sx={{ color: theme.color.white }}>
        {title}
      </Typography>
      <ProfileContainer>
        <AutherProfile
          name={name}
          date={date}
          imageUrl={imageUrl}
          colorName={theme.color.white}
        />
        <FavoriteButton
          isFavorited={isFavorited}
          favoritesCounts={favoritesCounts}
          slug={slug}
          updateHandler={updateHandler}
        />
        <FollowButton
          profileName={name}
          isFollow={isFollow}
          updateHandler={updateHandler}
        />
      </ProfileContainer>
    </Banner>
  );
};

export default TitleBanner;

const Banner = styled("div")`
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.gray.black};
  gap: 10px;
  padding: 15px 10%;
`;

const ProfileContainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
