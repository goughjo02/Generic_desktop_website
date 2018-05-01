import React from 'react';
import { Input } from 'semantic-ui-react'
import Slider from 'rc-slider';
import 'semantic-ui-css/semantic.min.css';
import 'rc-slider/assets/index.css';

import '../../ColourScheme.css';
import './Home.css';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numSteps: this.props.num_steps,
			numCompleted: 1,
			inputText: ""
		};
		this.renderProgress = this.renderProgress.bind(this)
		this.handleTextChange = this.handleTextChange.bind(this)
		this.handleTextSubmit = this.handleTextSubmit.bind(this)
		this.circleClick = this.circleClick.bind(this)
		this.sliderChange = this.sliderChange.bind(this)
	}

	renderProgress() {
		var height = 50
		var distance = 250
		const lightBlue = "rgb(26, 85, 122)"
		const darkBlue =  "rgb(20, 31, 58)"
		var progressCircles = []
		progressCircles.push(
			<g key="linearGradient">
			<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" style={{stopColor:lightBlue, stopOpacity:1}} />
			<stop offset="100%" style={{stopColor:darkBlue, stopOpacity:1}} />
			</linearGradient>
			</g>)
		for (var i = 0; i < this.state.numSteps; i++) {
			var num = (distance*(i)) + 25 
			if (i < this.state.numCompleted) {
				const m = "M" + (num - 10) + " 27.2l7.1 7.2 16.7-16.8"
				progressCircles.push(
					<g key={`circle-${i}`}>
					<circle id={i+1} onClick={this.circleClick} cx={num+1} cy={(height + 5)/2} r={height/2} fill="url(#grad1)" strokeWidth="2" stroke="rgb(65,105,139"/>
					<path className="checkmark__check nonCLickable" fill="none" stroke="#fff" strokeWidth="5" d={m}/>
					</g>
					)
			} else {
				progressCircles.push(
					<g key={`circle-${i}`}>
					<circle id={i+1} onClick={this.circleClick} cx={num+1} cy={(height + 5)/2} r={height/2} fill="#ffffff" strokeWidth="2" stroke="rgb(65,105,139"/>
					<text className="nonCLickable" y={(height/2) + 7} x={num - 4} style={{fill: 'rgb(65, 105, 139)'}}> {i+1} </text>
					</g>
					)}
			}
			progressCircles.push(<line strokeDasharray="200, 50" strokeDashoffset="198" key="line" x1="0" y1={height/2} x2={distance*(this.state.numSteps-1) + 50} y2={height/2} stroke="rgb(65,105,139)" strokeWidth="2" />)
			return <svg height={height + 10} width={(distance *(this.state.numSteps-1) + 52)}>{progressCircles}</svg>
		}

		handleTextChange(event) {
			this.setState({inputText: event.target.value})
		}

		handleTextSubmit(event) {
			alert('you clicked enter: ' + this.state.inputText);
			event.preventDefault();
		}

		circleClick(event) {
			this.setState({numCompleted: event.target.id})
			this.renderProgress()
		}

		sliderChange(event) {
			this.setState({numCompleted: event})
			this.renderProgress()
		}

		render() {
			return (
				<div className="homePane">
				<div className="title">Home</div>
				<div className="steps boxShadow">
				<p> Steps </p>
				<div ref="bla" className="stepsDiagram">
				{this.renderProgress()}
				</div>
				</div>
				<div className="utilities">
				<div className="inputText boxShadow">
				<p>Input text</p>
				<div className="inputBarHolder">
				<form className="inputBar" onSubmit={this.handleTextSubmit}>
				<Input className="inputBarText" action='Search' value={this.state.inputText} onChange={this.handleTextChange}/>
				</form>
				</div>
				</div>
				<div className="slider boxShadow">
				<p>Slider</p>
				<div className="sliderHolder">
				<Slider
				max={this.state.numSteps}
				value={this.state.numCompleted}
				onChange={this.sliderChange}
				style={{
					width:'80%',
				}}
				handleStyle={{
					borderColor: 'rgb(22, 54, 87)',
					height: 50,
					width: 50,
					marginLeft: -14,
					marginTop: -9,
					backgroundColor: 'white',
				}}
				trackStyle={{
					backgroundColor: 'rgb(26, 85, 123)',
					height: 20,
					borderRadius: 10
				}} 
				railStyle={{
					backgroundColor: 'rgb(20, 31, 58)',
					height: 20,
					borderRadius: 10
				}} />
				</div>
				</div>
				</div>
				</div>
				)
		}
	}