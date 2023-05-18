import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tab, Tabs } from "@mui/material";

import theme from "theme/theme";

const Feeds: React.FC<{}> = () => {
  const [isYourFeed, setIsYourFeed] = useState<boolean>(false);

  const FeedChangeHandler = (
    event: React.SyntheticEvent,
    feedValue: boolean
  ) => {
    setIsYourFeed(feedValue);
  };

  return (
    <div>
      <Tabs value={isYourFeed} onChange={FeedChangeHandler}>
        <Tab label="Your Feed" id="your-feed" value={true} />
        <Tab label="Global Feed" id="global-feed" value={false} />
      </Tabs>
      {isYourFeed && <div>This is my feeed</div>}
      {!isYourFeed && <div>This is global feeed</div>}
    </div>
  );
};

export default Feeds;
