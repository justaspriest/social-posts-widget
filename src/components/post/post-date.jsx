import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

const PostDate = (props) => {
    const dateEntry = moment(props.date).format(props.format);
    return (
        <Typography component="p">{ dateEntry }</Typography>
    );
}

export default PostDate;