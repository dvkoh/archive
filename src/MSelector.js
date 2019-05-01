import React, { Component } from 'react';


class MSelector extends Component{
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
			<div className='m-abBot roboto-400 f3 ml3 custom-select black-text pb6'>
				#&nbsp;
				<select id='Category' name='Category' size='0' className={this.state.underline1? 'no-back roboto-700 black-text underline cursor-pointer':'no-back roboto-700 black-text cursor-pointer'} defaultValue='work' onChange={func1} onMouseEnter={hoverIn1} onMouseLeave={hoverOut1}>
					<option value='work' className='big-text black'> work</option>
					<option value='wip' className='big-text black'> wip</option>
					<option value='stuff' className='big-text black'> stuff</option>
				</select>&nbsp;#&nbsp;
				<select id='SubCategory' name='SubCategory' size='0' className={this.state.underline2?'no-back black-text underline cursor-pointer':'no-back black-text cursor-pointer'} defaultValue='recent' onChange={func2} onMouseEnter={hoverIn2} onMouseLeave={hoverOut2}>
					<option value='all' className='big-text black'> all</option>
					<option value='recent' className='big-text black'> recent</option>
				</select>&nbsp;
			</div>
		);
	}
}

export default MSelector;