import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import favorites from "api/favorites";
import theme from "utils/theme";

const FavoriteButton: React.FC<{
  isFavorited: boolean;
  favoritesCounts: number;
  slug: string;
  updateHandler: () => Promise<void>;
}> = ({ isFavorited, favoritesCounts, slug, updateHandler }) => {
  const favoriteHandler = () => {
    if (isFavorited) {
      favorites.unfavoriteArticles(slug);
    } else {
      favorites.favoriteArticles(slug);
    }
    updateHandler();
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

export default FavoriteButton;

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
