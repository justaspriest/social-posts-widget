import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const SocialPostsWidgetTitle = (props) => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant="h4">{ props.text }</Typography>
            </Toolbar>
        </AppBar>
    );
};

SocialPostsWidgetTitle.propTypes = {
    text: PropTypes.string
};

export default SocialPostsWidgetTitle;