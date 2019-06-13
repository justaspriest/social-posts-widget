import { AppBar, Toolbar, Typography } from "@material-ui/core";
import * as React from "react";

export interface ISocialPostsWidgetTitleProps { text: string; }

const SocialPostsWidgetTitle = (props: ISocialPostsWidgetTitleProps) => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h4">{props.text}</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default SocialPostsWidgetTitle;
