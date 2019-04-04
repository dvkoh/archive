import React from 'react';
import Draggable from 'react-draggable';
import MediaQuery from 'react-responsive';
import nl2br from 'react-newline-to-break'; 

class List extends React.Component{
	constructor(props){
		super(props);
		this.state={
			toggle: false,
			clicked: false,
			underline: false
		};
	}
	
	render(){
		const click =()=> {
			this.setState({clicked: true});
			if(this.state.toggle === false)this.setState({toggle:true});
			else this.setState({toggle:false});
		}

		const hoverIn =()=> {if(this.state.underline === false)this.setState({underline:true});}
		const hoverOut =()=> {if(this.state.underline === true)this.setState({underline:false});}

		const info =[this.props.Title, this.props.MainKW, this.props.SubKW, this.props.Content, this.props.Year, this.props.PosX, this.props.PosY, this.props.Num, this.props.url];

		return(
			
			<div>
					<Draggable
				    handle=".handle"
				    defaultPosition={{x:info[5], y:info[6]}}
				    position={null}
				    onStart={List.handleStart}
				    onDrag={List.handleDrag}
				    onStop={List.handleStop}>
				    	<div id={`card${info[7]}`}  className='roboto-400 black-text card-width-mo' onClick={click}>
							<div className={this.state.clicked? 'purple-text':'blue-text'}>
								<p className='f3'>
									*&nbsp;<span className={this.state.toggle? 'invisible':''} title='drag'>{`${info[4]}`}_{`${info[1]}`}</span>&nbsp;
									<span className='f6 pointer'>
									<span className={this.state.underline? 'underline':''} onClick={click} onMouseOver={hoverIn} onMouseLeave={hoverOut}>
										{this.state.toggle? '[close]':'[open]'}
									</span>
									</span>
								</p>
							</div>
									
							<div className={this.state.toggle? 'card-width-mo':'plsHide'} >
								<div className=''>
								<img src={`${info[8]}`} alt=''/>
								</div>
								<div className=''>		
									<p className='calisto f3 ttl'><span className='bg-black white'>{`${info[0]}`}</span></p>
									<p className='calisto f6 ttl tr line-height'><span className='b'>{`${info[4]}`}</span><br/>/ {`${info[1]}`}<br/>/ {`${info[2]}`}</p>
									<p className='f5 lline-height'>&nbsp;{nl2br(info[3])}</p>
								</div>
							</div>
						</div>
					</Draggable>
				<div>
												
				</div>
			</div>
		);
	}
}
export default List;