import React from 'react';
import moment from 'moment';

const PostDate = (props) => {
    const dateEntry = moment(props.date).format(props.format);
    return (
        <p>{ dateEntry }</p>
    );
}

export default PostDate;