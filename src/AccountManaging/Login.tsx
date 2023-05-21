import React from "react";
import styled from "@emotion/styled";

import theme from "utils/theme";
import { Button, Link, OutlinedInput, Typography } from "@mui/material";

const Login: React.FC<{}> = () => {
  return (
    <ContentContainer>
      <Typography variant="h4">Sign In</Typography>
      <StyledForm onSubmit={() => console.log("submit!")}>
        <InputContainer>
          <StyledInput placeholder="Email" />
          <StyledInput placeholder="Password" />
          <StyledButton
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
          >
            Sign in
          </StyledButton>
        </InputContainer>
      </StyledForm>
      <Typography variant="subtitle1">
        Don't have an account?{" "}
        <Link
          href="/#/register"
          underline="none"
          sx={{ color: theme.color.primary }}
        >
          Sign Up
        </Link>
      </Typography>
    </ContentContainer>
  );
};

export default Login;

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
  width: 50%;
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
  width: 100%;
  background-color: ${theme.color.primary};
  margin-top: 20px;

  &:hover {
    background-color: ${theme.color.primary_hover};
  }
`;
