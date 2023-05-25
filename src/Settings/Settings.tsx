import React from "react";
import styled from "@emotion/styled";
import { Button, OutlinedInput, Typography } from "@mui/material";

import theme from "utils/theme";
import users from "api/userAndAuth";
import { useHistory } from "react-router-dom";

const Settings: React.FC<{}> = () => {
  const history = useHistory();

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const username = event.target[0].value;
    const email = event.target[2].value;
    const bio = event.target[4].value;
    const imageUrl = event.target[6].value;
    const res = await users.updateCurrentUser(username, email, bio, imageUrl);
    if (res) {
      window.location.reload();
    }
  };

  return (
    <ContentContainer>
      <Typography variant="h4">User Settings</Typography>
      <StyledForm onSubmit={submitHandler}>
        <InputContainer>
          <StyledInput placeholder="Your name" />
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Short bio about you" />
          <StyledInput placeholder="URL of profile picture" />

          <StyledButton
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
          >
            Update Settings
          </StyledButton>
        </InputContainer>
      </StyledForm>
    </ContentContainer>
  );
};

export default Settings;

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
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledInput = styled(OutlinedInput)`
  width: 100%;
`;

const StyledButton = styled(Button)`
  background-color: ${theme.color.primary};

  &:hover {
    background-color: ${theme.color.primary_hover};
  }
`;
