import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Tab, Tabs, Typography } from "@mui/material";

import theme from "utils/theme";
import articles from "api/articles";
import Feed from "common/Feed";

const Feeds: React.FC<{
  setArticleLink: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setArticleLink }) => {
  const [isYourFeed, setIsYourFeed] = useState<boolean>(false);
  const [globalFeed, setGlobalFeed] = useState([]);
  const [userFeed, setUserFeed] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const FeedChangeHandler = (
    event: React.SyntheticEvent,
    feedValue: boolean
  ) => {
    setIsYourFeed(feedValue);
  };

  const fetchFeeds = async () => {
    setIsLoading(true);

    const globalRes = await articles.getGlobalFeeds();
    if (globalRes) {
      setGlobalFeed(globalRes);
    }

    const userRes = await articles.getUserFeeds();
    if (userRes) {
      setUserFeed(userRes);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return (
    <ContentContainer>
      <Tabs value={isYourFeed} onChange={FeedChangeHandler}>
        <Tab label="Your Feed" id="your-feed" value={true} />
        <Tab label="Global Feed" id="global-feed" value={false} />
      </Tabs>
      {isLoading ? (
        <Typography variant="subtitle1" sx={{color: theme.color.black}}>Loading ...</Typography>
      ) : isYourFeed ? (
        userFeed.map((feed: any) => (
          <Feed
            username={feed.author.username}
            imageUrl={feed.author.image}
            title={feed.title}
            description={feed.description}
            createdAt={feed.createdAt}
            isFavorited={feed.favorited}
            favoritesCount={feed.favoritesCount}
            slug={feed.slug}
            updateHandler={fetchFeeds}
            setArticleLink={setArticleLink}
          />
        ))
      ) : (
        globalFeed.map((feed: any) => (
          <Feed
            username={feed.author.username}
            imageUrl={feed.author.image}
            title={feed.title}
            description={feed.description}
            createdAt={feed.createdAt}
            isFavorited={feed.favorited}
            favoritesCount={feed.favoritesCount}
            slug={feed.slug}
            updateHandler={fetchFeeds}
            setArticleLink={setArticleLink}
          />
        ))
      )}
    </ContentContainer>
  );
};

const ContentContainer = styled("div")`
  grid-column-start: 1;
  grid-column-end: 3;
  color: ${theme.color.primary};

  & .MuiButtonBase-root.MuiTab-root {
    color: ${theme.color.primary};
    border-color: ${theme.color.primary};
  }

  & .MuiTabs-indicator {
    background-color: ${theme.color.primary};
  }
`;

export default Feeds;
