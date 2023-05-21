import React from "react";
import styled from "@emotion/styled";
import { Button, OutlinedInput } from "@mui/material";

import theme from "theme/theme";

const NewArticle: React.FC<{}> = () => {
  return (
    // TODO: submit data
    <StyledForm onSubmit={() => console.log("submit!")}>
      <InputContainer>
        <StyledInput placeholder="Article Title" />
        <StyledInput placeholder="What's this article about?" />
        <StyledInput
          placeholder="Write your article (in markdown)"
          multiline
          rows={6}
        />
        {/* TODO: add tags */}
        <StyledButton
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-end" }}
        >
          Publish Article
        </StyledButton>
      </InputContainer>
    </StyledForm>
  );
};

export default NewArticle;

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
  margin-top: 5%;
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
