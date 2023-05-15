import React from "react";
import styled from "@emotion/styled";
import theme from "theme/theme";
import { Typography } from "@mui/material";
import Tag from "./Tag";

const PopularTags: React.FC<{}> = () => {
  return (
    <ContentContainer>
      <Typography variant="subtitle1">Popular Tags</Typography>

      <TagsContainer>
        <Tag name="React" />
        <Tag name="Programming" />
        <Tag name="Javascript" />
        <Tag name="angularjs" />
        <Tag name="node" />
        <Tag name="rails" />
      </TagsContainer>
    </ContentContainer>
  );
};

export default PopularTags;

const ContentContainer = styled("div")`
  width: 25%;
  background-color: ${theme.color.gray.light};
  padding: 10px;
`;

const TagsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;
