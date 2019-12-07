import React from 'react';
import MediaQuery from 'react-responsive';

class HeadName extends React.Component{
	constructor(){
		super();
		this.state = {
			name: 'Dongyoon'
		};
	}

	render(){
		const hoverIn =()=> {
			if(this.state.name === 'Dongyoon')this.setState({name:'David'})
			else if(this.state.name === 'David')this.setState({name:'東潤'})
			else this.setState({name:'Dongyoon'})
		}

		return(
			<div>
			<MediaQuery minDeviceWidth={700}>
					<div className='frame flex justify-between roboto-400 black-text f72 ml4 mt3 pt1 mb4'>						
							<p className='' onMouseEnter={hoverIn}> {this.state.name} <span className='roboto-700'>Koh</span></p>
					</div>	
			</MediaQuery>	
			</div>
		);
	}
}

export default HeadName;