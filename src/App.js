import React from 'react';
// import Button from './stories/StoryButton';
import Button from './components/Button';
import './global.css';

function App() {
	return (
		<div className="App">
			<h1>Moyo</h1>
			<Button label="Moyo" onClick={() => {}} size="large" primary />
		</div>
	);
}

export default App;
