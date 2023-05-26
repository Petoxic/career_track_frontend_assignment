import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import articles from "api/articles";
import profile from "api/profile";
import { Avatar, Typography } from "@mui/material";
import FollowButton from "common/FollowButton";
import theme from "utils/theme";
import { useHistory } from "react-router-dom";
import Feed from "common/Feed";

const UserProfile: React.FC<{
  username: string;
  setArticleLink: React.Dispatch<React.SetStateAction<string>>;
}> = ({ username, setArticleLink }) => {
  const history = useHistory();
  const [userData, setUserData] = useState<any>({});
  const [userArticles, setUserArticles] = useState([]);
  const [pathname, setPathname] = useState<any>();

  const getUserDatas = async () => {
    const username: string | null =
      sessionStorage.getItem("currentUserProfile");

    if (username) {
      const articlesList = await articles.getGlobalFeeds({ author: username });
      if (articlesList) {
        setUserArticles(articlesList);
      }

      const data = await profile.getProfile(username);
      if (data) {
        setUserData(data);
      }
    }
  };

  useEffect(() => {
    getUserDatas();
    history.listen((listen) => setPathname(listen));
  }, [pathname]);

  return (
    <>
      <ProfileBanner>
        <Avatar src={userData.image} sx={{ width: "5rem", height: "5rem" }} />
        <Typography variant="h4" sx={{ color: theme.color.white }}>
          {userData.username}
        </Typography>
        {userData.username === username ? undefined : (
          <FollowButton
            profileName={userData.username}
            isFollow={userData.following}
            updateHandler={getUserDatas}
          />
        )}
      </ProfileBanner>
      <Typography>articles</Typography>
      {userArticles.map((article: any) => {
        <Feed
          username={article.author.username}
          imageUrl={article.author.image}
          title={article.title}
          description={article.description}
          createdAt={article.createdAt}
          isFavorited={article.favorited}
          favoritesCount={article.favoritesCount}
          slug={article.slug}
          updateHandler={getUserDatas}
          setArticleLink={setArticleLink}
        />;
      })}
    </>
  );
};

export default UserProfile;

const ProfileBanner = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.color.gray.black};
  gap: 10px;
  padding: 15px 10%;
`;
