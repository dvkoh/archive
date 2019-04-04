import React from 'react';
import Draggable from 'react-draggable';
import MediaQuery from 'react-responsive';
import nl2br from 'react-newline-to-break'; 
// import onClickOutside from "react-onclickoutside";

class Card extends React.Component{
	constructor(props){
		super(props);
		this.state={
			toggle: false,
			clicked: false,
			underline: false,
			mCount:'0'
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

		const drag =()=>{this.setState({dragging:false})}
		const dragstop =()=>{this.setState({dragging:false})}

		const toTop=()=>{
			this.state.mCount=this.props.mCount;
		}
		
		const info =[this.props.Title, this.props.MainKW, this.props.SubKW, this.props.Content, this.props.Year, this.props.PosX, this.props.PosY, this.props.Num, this.props.url];

		return(
			
			<div>
			<MediaQuery minDeviceWidth={700}>
			
					<Draggable
				    handle=".handle"
				    defaultPosition={{x:info[5], y:info[6]}}
				    position={null}
				    onStart={Card.handleStart}
				    onDrag={Card.handleDrag}
				    onStop={Card.handleStop}
				    onMouseDown={drag}
				    onTouchEnd={dragstop}>
				    	<div id={`card${info[7]}`}className='mover handle roboto-400 black-text' style={{zIndex:`${this.state.mCount}`}} onClick={toTop}>
				    	<div>
							<div className={this.state.clicked? 'purple-text':'blue-text'}>
							<div className='big-text ttl no-line-height'>
								<p>
									*&nbsp;<span className={this.state.toggle? 'invisible':''} title='drag'>{`${info[4]}`}_{`${info[1]}`}</span>&nbsp;
									<span className='f4 pointer'>
									<span className={this.state.underline? 'underline':''} onClick={click} onMouseOver={hoverIn} onMouseLeave={hoverOut}>
										{this.state.toggle? '[close]':'[open]'}
									</span>
									</span>
								</p>
							</div>
							</div>
									
							<div className={this.state.toggle? 'card-width':'plsHide'} >
								<div className='img-position'>
								<img src={`${info[8]}`} alt=''/>
								</div>
								<div className=''>		
									<p className='calisto f2 ttl pa0 ma0 mt2'><span className='white bg-black'>{`${info[0]}`}</span></p>
									<p className='calisto f7 ttl tr line-height'><span className='bg-white'><span className='b'>{`${info[4]}`}</span><br/>/ {`${info[1]}`}<br/>/ {`${info[2]}`}</span></p>
									<p className='f6 lline-height tj'><span className='bg-white'>{nl2br(info[3])}</span></p>
								</div>
							</div>
						</div>
						</div>
					</Draggable>
				<div>
												
				</div>
			</MediaQuery>	
			</div>
		);
	}
}
export default Card;