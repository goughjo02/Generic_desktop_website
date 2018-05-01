import React from 'react';
import { Icon } from 'semantic-ui-react';

import Header from './Header/Header';
import Tabs from './Tabs/Tabs';
import Home from './Home/Home';
import Settings from './Settings/Settings';

export default props => {
	const { user, num_steps } = props	
	const panes = [
	{	name: "Home",
		icon: <Icon className="menuIcon nonCLickable" size="large" name='home'/>,
		content: <Home num_steps={num_steps}/>
	},
	{	name: "Settings",
		icon: <Icon className="menuIcon nonCLickable" size="large" name='setting'/>,
		content: <Settings/>
	},
	];
	return (
		<div>
		<Header user={user} />
		<Tabs panes={panes} />
		</div>)
}