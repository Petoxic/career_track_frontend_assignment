import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import theme from "utils/theme";
import profile from "api/profile";

const FollowButton: React.FC<{
  profileName: string;
  isFollow: boolean;
  updateHandler: () => Promise<void>;
}> = ({ profileName, isFollow, updateHandler }) => {
  const favoriteHandler = () => {
    if (isFollow) {
      profile.unfollowUser(profileName)
    } else {
      profile.followUser(profileName)
    }
    updateHandler();
  };

  const primaryColor: string = isFollow
    ? theme.color.gray.black
    : theme.color.white;
  const secondaryColor: string = isFollow
    ? theme.color.white
    : theme.color.gray.black;
  const text: string = isFollow ? 'Unfollow' : 'Follow'
  return (
    <FavoriteContainer
      primary={secondaryColor}
      secondary={primaryColor}
      onClick={favoriteHandler}
    >
      <AddIcon sx={{ color: primaryColor }} />
      <Typography variant="subtitle2" sx={{ color: primaryColor }}>
        {text}{" "}{profileName}
      </Typography>
    </FavoriteContainer>
  );
};

export default FollowButton;

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
