import React from "react";
import { Chip } from "@mui/material";

import theme from "utils/theme";

const Tag: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Chip
      label={name}
      size="small"
      sx={{
        backgroundColor: theme.color.gray.dark,
        color: theme.color.white,
      }}
    />
  );
};

export default Tag;
