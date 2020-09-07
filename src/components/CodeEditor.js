import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/mode-javascript";

const CodeEditor = ({ theme, mode, value, readonly, ...props }) => {
    return (
        <AceEditor
            mode="javascript"
            theme="dracula"
            value={value}
            height="200px"
            readonly={readonly}
        />
    );
};

export default CodeEditor;
