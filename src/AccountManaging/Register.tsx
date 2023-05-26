import React from "react";
import styled from "@emotion/styled";
import { Button, Link, OutlinedInput, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

import theme from "utils/theme";
import users from "api/userAndAuth";

const Register: React.FC<{}> = () => {
  const history = useHistory();

  const registerHandler = async (event: any) => {
    event.preventDefault();
    const username: string = event.target[0].value;
    const email: string = event.target[2].value;
    const password: string = event.target[4].value;
    const res = await users.registerUser(username, email, password);
    if (res) {
      history.push("/");
    }
  };

  return (
    <ContentContainer>
      <Typography variant="h4">Sign Up</Typography>
      <StyledForm onSubmit={registerHandler}>
        <InputContainer>
          <StyledInput id="name" placeholder="Your name" />
          <StyledInput id="email" placeholder="Email" />
          <StyledInput id="password" placeholder="Password" type="password" />
          <StyledButton
            type="submit"
            variant="contained"
            sx={{ alignSelf: "flex-end" }}
          >
            Sign up
          </StyledButton>
        </InputContainer>
      </StyledForm>
      <Typography variant="subtitle1">
        Have an account?{" "}
        <Link
          href="/#/login"
          underline="none"
          sx={{ color: theme.color.primary }}
        >
          Sign In
        </Link>
      </Typography>
    </ContentContainer>
  );
};

export default Register;

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

const StyledButton = styled(Button)`
  width: 100%;
  background-color: ${theme.color.primary};
  margin-top: 20px;

  &:hover {
    background-color: ${theme.color.primary_hover};
  }
`;
