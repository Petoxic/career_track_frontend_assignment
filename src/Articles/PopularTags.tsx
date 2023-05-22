import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

import theme from "utils/theme";
import Tag from "./Tag";
import api from "utils/api";

const PopularTags: React.FC<{}> = () => {
  const [tags, setTags] = useState([]);

  const getTags = async () => {
    const res = await api.get("http://localhost:3001/api/tags");
    setTags(res.data.tags);
  };
  
  useEffect(() => {
    getTags();
  }, []);

  return (
    <ContentContainer>
      <Typography variant="subtitle1">Popular Tags</Typography>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag name={tag} />
        ))}
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
