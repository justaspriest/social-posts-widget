import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PostDate from './post-date.jsx';
import mapTextToComponents from '../../mappers/map-text-to-components.jsx';

const useStyles = makeStyles(theme => {
    paper: {
        padding: theme.spacing(3, 2)
    }
});

const Post = (props) => {
    const postData = props.data;

    const postId = postData.id;
    const userName = postData.user.name;
    const postDate = postData.created_at;
    const postText = postData.text;

    const classes = useStyles();

    return (
        <Paper key={ postId } className={ classes.paper }>
            <Typography variant="h5">{ userName }</Typography>
            <PostDate date={ postDate } format="DD.MM.YYYY HH:mm"/>
            <Typography component="p">
                { mapTextToComponents(postText) }
            </Typography>
        </Paper>
    );
};

export default Post;