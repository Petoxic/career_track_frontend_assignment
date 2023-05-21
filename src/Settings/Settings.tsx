import React from "react";
import styled from "@emotion/styled";
import { Button, OutlinedInput } from "@mui/material";

import theme from "theme/theme";

const Settings: React.FC<{}> = () => {
  return (
    <StyledForm onSubmit={() => console.log("submit!")}>
      <InputContainer>
        <StyledInput placeholder="URL of profile picture" />
        <StyledInput placeholder="Your name" />
        <StyledInput placeholder="Short bio about you" />
        <StyledInput placeholder="Email" />
        <StyledInput placeholder="Password" />

        <StyledButton
          type="submit"
          variant="contained"
          sx={{ alignSelf: "flex-end" }}
        >
          Update Settings
        </StyledButton>
      </InputContainer>
    </StyledForm>
  );
};

export default Settings;

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
  margin-top: 5%;
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
