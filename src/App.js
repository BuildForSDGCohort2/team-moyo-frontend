import React from 'react';
import { Button, Card, Loader, Input } from './components';
import './global.css';

function App() {
	return (
		<div className="App">
			<h1>Moyo</h1>
			<Button label="Moyo" onClick={() => {}} size="large" />
			<Input type="text" required={false} name="name" />
			<Card />
			<Loader />
		</div>
	);
}

export default App;
