import * as React from "react";
import * as ReactDOM from "react-dom";

import { PostDate } from "../atoms/post-date";
import { Title } from "../atoms/title";
import { injectWidget } from "../index";
import { Post } from "../molecules/post";
import { PostList } from "../organisms/post-list";
import { SocialPostsWidget } from "../templates/widget";

const simulateMount = (element: JSX.Element) => {
  const container = document.createElement("div");
  ReactDOM.render(element, container);
};

it("Injecting", () => {
  document.body.innerHTML = "<div id=\"social-posts-widget\"/>";
  injectWidget();

  document.body.innerHTML = "<div id=\"dummy\"/>";
  injectWidget("#dummy", "", 20, 300);
});

/* Templates */
it("Widget render", () => {
  const element = (
    <SocialPostsWidget
      feedURL={""}
      countOfPosts={20}
      refreshInterval={300}
    />
  );
  simulateMount(element);
});

/* Organisms */
it("Post List render", () => {
  const element = (
    <PostList
      postsData={[]}
    />
  );
  simulateMount(element);
});

/* Molecules */
it("Post render", () => {
  const postData = {
    id: 1,
    text: "",
    created_at: "",
    userName: "",
  };
  const element = (
    <Post
      data={postData}
    />
  );
  simulateMount(element);
});

/* Atoms */
it("Post Date render", () => {
  const element = (
    <PostDate
      date=""
    />
  );
  simulateMount(element);
});

it("Widget Title render", () => {
  const element = (
    <Title
      text=""
    />
  );
  simulateMount(element);
});
