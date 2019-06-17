import * as React from "react";

export interface ISocialPostsWidgetTitleProps { text: string; }

const Title = (props: ISocialPostsWidgetTitleProps) => {
  return (
    <div>
      <h4>{props.text}</h4>
    </div>
  );
};

export { Title };
