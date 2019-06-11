import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

import PostDate from './post-date.jsx';
import mapTextToComponents from '../../mappers/map-text-to-components.jsx';

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(2, 0),
        padding: theme.spacing(3, 2),
    },
    text: {
        padding: theme.spacing(1, 0),
    }
}));

const Post = (props) => {
    const postData = props.data;

    const postId = postData.id;
    const postDate = postData.created_at;
    const postText = postData.text;
    const userName = postData.user.name;

    const classes = useStyles();

    return (
        <Paper key={ postId } className={ classes.paper }>
            <Typography variant="h5">{ userName }</Typography>
            <PostDate date={ postDate } format="DD.MM.YYYY HH:mm"/>
            <Typography component="p" className={ classes.text }>
                { mapTextToComponents(postText) }
            </Typography>
        </Paper>
    );
};

Post.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.string,
        text: PropTypes.string,
        user: PropTypes.shape({
            name: PropTypes.string,
        })
    })
};

export default Post;