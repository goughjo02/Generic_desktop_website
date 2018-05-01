import React from 'react';

import './App.css';
import HomePage from './HomePage';


class App extends React.Component {
	render() {
		return (
			<div className="App">
			<HomePage user="John Doe" num_steps={4}/>
			</div>
			);
	}
}

export default App;
