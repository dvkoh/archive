import React from 'react';
import MediaQuery from 'react-responsive';

class HeadName extends React.Component{
	constructor(){
		super();
		this.state = {
			name: 'Dong Yoon'
		};
	}
	changeName = () => {
		if(this.state.name === 'Dong Yoon')this.setState({name:'David'})
		else if(this.state.name === 'David')this.setState({name:'동윤'})
		else if(this.state.name === '동윤')this.setState({name:'東潤'})
		else this.setState({name:'Dong Yoon'})
	}

	render(){
		return(
			<div>
			<MediaQuery minDeviceWidth={700}>
					<div className='frame flex justify-between roboto-400 black-text f6 ml4 mt3 mb4'>						
							<p className='w-90' >{this.state.name} </p>
							<p className='w-10 roboto-700'>Koh</p>
					</div>	
			</MediaQuery>	
			</div>
		);
	}
}

export default HeadName;