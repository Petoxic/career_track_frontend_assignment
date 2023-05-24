import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import theme from "utils/theme";
import Tag from "./Tag";
import tags from "api/tags";

const PopularTags: React.FC<{}> = () => {
  const [tagsList, setTagsList] = useState([]);

  const getTagsList = async () => {
    const res = await tags.getTags();
    if (res) {
      setTagsList(res);
    }
  };

  useEffect(() => {
    getTagsList();
  }, []);

  return (
    <ContentContainer>
      <Typography variant="subtitle1">Popular Tags</Typography>
      <TagsContainer>
        {tagsList.map((tag) => (
          <Tag name={tag} />
        ))}
      </TagsContainer>
    </ContentContainer>
  );
};

export default PopularTags;

const ContentContainer = styled("div")`
  height: fit-content;
  grid-column-start: 4;
  background-color: ${theme.color.gray.light};
  padding: 10px;
`;

const TagsContainer = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;
