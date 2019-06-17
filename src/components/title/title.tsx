import * as React from "react";

import { Widget } from "../../index-ns";

const Title = (props: Widget.TitleProps) => {
  return (
    <div>
      <h4>{props.text}</h4>
    </div>
  );
};

export { Title };
