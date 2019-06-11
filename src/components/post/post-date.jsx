import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import PropTypes from 'prop-types';
import moment from 'moment';

const useStyles = makeStyles(() => ({
    date: {
        color: grey[400]
    }
}));

const PostDate = (props) => {
    const dateEntry = moment(props.date).format(props.format);
    const classes = useStyles();
    return (
        <Typography
            component="p"
            fontWeight="fontWeightLight"
            className={ classes.date }>
            { dateEntry }
        </Typography>
    );
}

PostDate.propTypes = {
    date: PropTypes.string,
    format: PropTypes.string
};

export default PostDate;