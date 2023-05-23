import React from "react";
import styled from "@emotion/styled";
import { Button, Link, OutlinedInput, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import theme from "utils/theme";
import users from "api/userAndAuth";

const Login: React.FC<{
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsLogin }) => {
  const history = useHistory();

  const loginHandler = async (event: any) => {
    event.preventDefault();
    const email: string = event.target[0].value;
    const password: string = event.target[2].value;
    const res = await users.loginUser(email, password);
    setIsLogin(res);
    if (res) {
      history.push("/");
    }
  };

  return (
    <ContentContainer>
      <Typography variant="h4">Sign In</Typography>
      <StyledForm onSubmit={loginHandler}>
        <InputContainer>
          <StyledInput id="email" placeholder="Email" />
          <StyledInput id="password" placeholder="Password" type="password" />
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
