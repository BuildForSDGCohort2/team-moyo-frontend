import React from 'react';
import {
	Button,
	Card,
	Loader,
	Input,
	CodeEditor,
} from './components';
import './global.css';

function App() {
	const code = `function App() {
        return (
        );
    }`;
	return (
		<div className="App">
			<h1>Moyo</h1>
			<Button label="Moyo" onClick={() => {}} size="large" />
			<Input type="text" required={false} name="name" />
			<Card />
			<Loader />

			<CodeEditor theme="" code={code} mode="" />
		</div>
	);
}

export default App;
