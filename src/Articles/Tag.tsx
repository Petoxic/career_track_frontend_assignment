import React from "react";
import styled from "@emotion/styled";
import theme from "utils/theme";
import { Chip } from "@mui/material";

const Tag: React.FC<{ name: string }> = ({ name }) => {
  const clickHandler = () => {
    console.log("Tag Clicked");
  };

  return (
    <Chip
      label={name}
      onClick={clickHandler}
      size="small"
      sx={{
        backgroundColor: theme.color.gray.dark,
        color: theme.color.white,
      }}
    />
  );
};

export default Tag;
