import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { Avatar, Link, Typography } from "@mui/material";

import theme from "utils/theme";

const AutherNameContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

const ProfileContainer = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

const AutherName: React.FC<{ name: string; date: string; colorName: string }> =
  ({ name, date, colorName }) => {
    const currentUserProfileHandler = () => {
      sessionStorage.setItem("currentUserProfile", name);
    };

    return (
      <AutherNameContainer>
        <Link
          href={`/#/profile/${name}`}
          variant="subtitle1"
          underline="none"
          sx={{ color: colorName }}
          onClick={currentUserProfileHandler}
        >
          {name}
        </Link>
        <Typography variant="subtitle2" sx={{ color: theme.color.gray.medium }}>
          {date}
        </Typography>
      </AutherNameContainer>
    );
  };

const AutherProfile: React.FC<{
  name: string;
  date: string;
  imageUrl: string;
  colorName?: string;
}> = ({ name, date, imageUrl, colorName = `${theme.color.primary}` }) => {
  const formattedDate = dayjs(date).format("D MMMM YYYY");
  return (
    <ProfileContainer>
      <Avatar src={imageUrl} />
      <AutherName name={name} date={formattedDate} colorName={colorName} />
    </ProfileContainer>
  );
};

export default AutherProfile;
