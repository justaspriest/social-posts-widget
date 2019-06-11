import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import PropTypes from 'prop-types';

const PostDate = (props) => {
    const dateEntry = moment(props.date).format(props.format);
    return (
        <Typography component="p">{ dateEntry }</Typography>
    );
}

PostDate.propTypes = {
    date: PropTypes.string,
    format: PropTypes.string
};

export default PostDate;