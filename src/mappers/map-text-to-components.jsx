import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const URL_PATTERN = /^http(s)?:\/\//;
const TEXT_SPLITTER = " ";

const mapTextEntryToComponent = (textEntry, index) => {
    const textToDisplay = textEntry + TEXT_SPLITTER;
    if (URL_PATTERN.test(textToDisplay)) {
        return (
            <Link key={"link" + index} href={textEntry}>
                { textToDisplay }
            </Link>
        );
    } else {
        return textToDisplay;
    }
}

const mapTextLineToComponent = (textLine, index) => {
    const lineContent = textLine.split(TEXT_SPLITTER)
        .map(mapTextEntryToComponent);
    return (
        <Typography key={"line" + index} component="p">
            { lineContent }
        </Typography>
    );
};

const mapTextToComponents = (text) => {
    return text.split("\n")
        .map(mapTextLineToComponent);
};

export default mapTextToComponents;