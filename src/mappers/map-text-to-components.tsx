import * as React from "react";

const URL_PATTERN = /^http(s)?:\/\//;
const TEXT_SPLITTER = " ";

const mapTextEntryToComponent = (textEntry: string, index: number) => {
    const textToDisplay = textEntry + TEXT_SPLITTER;
    if (URL_PATTERN.test(textToDisplay)) {
        return (
            <a key={"link" + index} href={textEntry}>{textToDisplay}</a>
        );
    } else {
        return textToDisplay;
    }
};

const mapTextLineToComponent = (textLine: string, index: number) => {
    const lineContent = textLine.split(TEXT_SPLITTER)
        .map(mapTextEntryToComponent);
    return (
        <p key={"line" + index}>{lineContent}</p>
    );
};

const mapTextToComponents = (text: string) => {
    return text.split("\n")
        .map(mapTextLineToComponent);
};

export default mapTextToComponents;
