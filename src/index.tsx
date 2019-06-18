import React from "react";
import ReactDOM from "react-dom";

import { SocialPostsWidget } from "./components/widget";

const injectWidget = (
  containerSelector: string = "#social-posts-widget",
  feedURL: string = "http://api.massrelevance.com/MassRelDemo/kindle.json",
  countOfPosts: number = 20,
  refreshInterval: number = 5000,
) => {
  const container = document.querySelector(containerSelector);
  ReactDOM.render((
    <SocialPostsWidget
      feedURL={feedURL}
      countOfPosts={countOfPosts}
      refreshInterval={refreshInterval}
    />
  ), container);
};

export { SocialPostsWidget, injectWidget };
