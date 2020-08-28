import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/addon/display/autorefresh';
// import 'codemirror/addon/comment/comment';
// import 'codemirror/addon/edit/matchbrackets';.
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/hint/javascript-hint';
import './CodeEditor.css';
import './monokai.css';

const CodeEditor = ({ theme, mode, code, ...props }) => {
	return (
		<CodeMirror
			value={code}
			options={{
				mode: '',
				theme: 'monokai',
			}}
		/>
	);
};

export default CodeEditor;
