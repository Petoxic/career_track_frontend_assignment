import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";

import theme from "utils/theme";
import articles from "api/articles";
import tags from "api/tags";

const NewArticle: React.FC<{}> = () => {
  const [articleTag, setArticleTag] = useState<string[]>([]);
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

  const createHandler = async (event: any) => {
    event.preventDefault();
    const title = event.target[0].value;
    const description = event.target[2].value;
    const body = event.target[4].value;
    const res = await articles.createArticle(
      title,
      description,
      body,
      articleTag
    );
    if (res) {
      window.location.reload();
    }
  };

  const tagsHandler = (event: any) => {
    const value = event.target.value;
    setArticleTag(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <ContentContainer>
      <Typography variant="h4">Add New Article</Typography>
      <StyledForm onSubmit={createHandler}>
        <InputContainer>
          <StyledInput placeholder="Article Title" />
          <StyledInput placeholder="What's this article about?" />
          <StyledInput
            placeholder="Write your article (in markdown)"
            multiline
            rows={6}
          />
          <Select
            multiple
            displayEmpty
            input={<StyledInput />}
            value={articleTag}
            onChange={tagsHandler}
            renderValue={(list) => {
              if (list.length > 0) {
                return list.join(",");
              } else {
                return (
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.color.gray.medium }}
                  >
                    Select Tag
                  </Typography>
                );
              }
            }}
          >
            {tagsList.map((tag: string) => {
              return (
                <MenuItem key={tag} value={tag}>
                  {tag}
                </MenuItem>
              );
            })}
          </Select>
          <StyledButton
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
          >
            Publish Article
          </StyledButton>
        </InputContainer>
      </StyledForm>
    </ContentContainer>
  );
};

export default NewArticle;

const ContentContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

const StyledForm = styled("form")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled("div")`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled(OutlinedInput)`
  width: 100%;
`;

// TODO: fix blur border when click
const StyledButton = styled(Button)`
  background-color: ${theme.color.primary};

  &:hover {
    background-color: ${theme.color.primary_hover};
  }
`;
