import React from 'react';
import { Icon, Dropdown } from 'semantic-ui-react'
import MainLogo from './abcinc.png';

import 'semantic-ui-css/semantic.min.css';
import '../../ColourScheme.css';
import './Header.css';

export default props => {
	return (
		<div>
			<div className="placeholder" />
			<div className="Header boxShadow">
				<div className="logoHolder">
					<img alt="logo" src={MainLogo} className="logo"/>
				</div>
				<div className="alarmIcon">
					<Icon name='alarm' className="color" size="large"/>
				</div>
				<div className="color username">{props.user}</div>
				<Dropdown icon="chevron down" className="color">
					<Dropdown.Menu>
						<Dropdown.Item text='New' />
					</Dropdown.Menu>
				</Dropdown>
				<Icon name='user circle outline' className="color head" size="big"/>
			</div>
		</div>
	)
}