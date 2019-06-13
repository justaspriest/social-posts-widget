import { Paper, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";

import mapTextToComponents from "../../mappers/map-text-to-components";
import PostDate from "./post-date";
import { PostNS } from "./post-ns";

const useStyles = makeStyles((theme: Theme) => createStyles({
    paper: {
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3, 2),
    },
    text: {
        padding: theme.spacing(1, 0),
    },
}));

const Post = (props: PostNS.IProps) => {
    const postData = props.data;

    const postDate = postData.created_at;
    const postText = postData.text;
    const userName = postData.user.name;

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5">{userName}</Typography>
            <PostDate date={postDate} format="DD.MM.YYYY HH:mm"/>
            <Typography component="p" className={classes.text}>
                {mapTextToComponents(postText)}
            </Typography>
        </Paper>
    );
};

export default Post;
