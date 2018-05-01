import React from 'react';

import './Tabs.css';

export default class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.renderMenu = this.renderMenu.bind(this);
		this.renderPanes = this.renderPanes.bind(this);
		this.selectPane = this.selectPane.bind(this);
		this.state = {
			selected: "Home"
		}
	}

	renderMenu() {
		const {panes} = this.props;
		return panes.map((pane) => {
			return <div
			id={pane.name}
			key={pane.name}
			className={"TabItem " + (pane.name === this.state.selected ? "SelectedTab" : "NotSelectedTab")}
			onClick={this.selectPane}
			>
			{pane.icon}
			{pane.name}</div>
		})
	}

	renderPanes() {
		const {panes} = this.props;
		for (var i=0; i < panes.length; i++) {
			if (panes[i].name === this.state.selected) {
				return panes[i].content
			}
		}
	}

	selectPane(e) {
		this.setState({selected: e.target.id})
		this.renderMenu()
		this.renderPanes()
	}

	render() {
		return (
			<div className="Tabs">
			<div className="TabMenu">
			{this.renderMenu()}
			</div>
			<div className="TabContent">
			{this.renderPanes()}
			</div>
			</div>
			)
	}
}