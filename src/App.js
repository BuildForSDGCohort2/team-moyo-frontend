import React from 'react';
// import Button from './stories/StoryButton';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Loader from './components/Loader';
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
