import React, { Component } from 'react';


class Selector extends Component{
	constructor({searchfield1, searchfield2, searchChange1, searchChange2, searchRefresh}){
		super();
		this.state={
			underline1: false,
			underline2: false,
			underline3: false
		};
	}

	render(){
		const func1=(event)=>{this.props.searchChange1(event);func3(event);}	 
		const func2=(event)=>{this.props.searchChange2(event);}
		const func3=(event)=>{this.props.searchRefresh(event);}

		const hoverIn1 =()=> {if(this.state.underline1 === false)this.setState({underline1:true});}
		const hoverOut1 =()=> {if(this.state.underline1 === true)this.setState({underline1:false});}

		const hoverIn2 =()=> {if(this.state.underline2 === false)this.setState({underline2:true});}
		const hoverOut2 =()=> {if(this.state.underline2 === true)this.setState({underline2:false});}

		const hoverIn3 =()=> {if(this.state.underline3 === false)this.setState({underline3:true});}
		const hoverOut3 =()=> {if(this.state.underline3 === true)this.setState({underline3:false});}

		return(
			<div className='abBot roboto-400 f4 ml4 custom-select black-text'>
			
				<select id='Category' name='Category' size='0' className={this.state.underline1? 'no-back roboto-700 blue-text underline clicker':'no-back roboto-700 blue-text clicker'} defaultValue='work' onChange={func1} onMouseEnter={hoverIn1} onMouseLeave={hoverOut1}>
					<option value='work' className='f25 black'> work</option>
					<option value='wip' className='f25 black'> wip</option>
					<option value='stuff' className='f25 black'> stuff</option>
				</select>&nbsp;:&nbsp;
				<select id='SubCategory' name='SubCategory' size='0' className={this.state.underline2?'no-back blue-text underline clicker':'no-back blue-text clicker'} defaultValue='recent' onChange={func2} onMouseEnter={hoverIn2} onMouseLeave={hoverOut2}>
					<option value='all' className='f25 black'> all</option>
					<option value='recent' className='f25 black'> recent</option>
				</select>&nbsp;→&nbsp;&nbsp;
				
			</div>
		);
	}
}

export default Selector;

// <span className={this.state.underline3?'blue-text underline clicker f3 b':'blue-text clicker f3 b'} onClick={func3} onMouseEnter={hoverIn3} onMouseLeave={hoverOut3}>↺</span>
