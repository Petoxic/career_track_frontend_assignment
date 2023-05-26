import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";

import theme from "utils/theme";
import articles from "api/articles";
import Feed from "common/Feed";

const Feeds: React.FC<{
  setArticleLink: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setArticleLink }) => {
  const [isYourFeed, setIsYourFeed] = useState<boolean>(false);
  const [globalFeed, setGlobalFeed] = useState([]);
  const [userFeed, setUserFeed] = useState([]);

  const FeedChangeHandler = (
    event: React.SyntheticEvent,
    feedValue: boolean
  ) => {
    setIsYourFeed(feedValue);
  };

  const fetchFeeds = async () => {
    const globalRes = await articles.getGlobalFeeds();
    if (globalRes) {
      setGlobalFeed(globalRes);
    }

    const userRes = await articles.getUserFeeds();
    if (userRes) {
      setUserFeed(userRes);
    }
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
      {isYourFeed &&
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
        ))}
      {!isYourFeed &&
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
        ))}
    </ContentContainer>
  );
};

const ContentContainer = styled("div")`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export default Feeds;
