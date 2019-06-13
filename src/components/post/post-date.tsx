import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import * as React from "react";

import { PostNS } from "./post-ns";

const useStyles = makeStyles(() => ({
    date: {
        color: grey[400],
    },
}));

const PostDate = (props: PostNS.IDateProps) => {
    const dateEntry = moment(props.date).format(props.format);
    const classes = useStyles();

    return (
        <Typography
            component="p"
            className={classes.date}
        >
            {dateEntry}
        </Typography>
    );
};

export default PostDate;
