import * as React from "react";

import { dateFormat } from "../../helpers/date";
import { PostNS } from "./post-ns";

const PostDate = (props: PostNS.IDateProps) => {
    const dateEntry = dateFormat(props.date);

    return (
        <p>{dateEntry}</p>
    );
};

export { PostDate };
