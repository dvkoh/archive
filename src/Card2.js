import React from 'react';
import Draggable from 'react-draggable';
import MediaQuery from 'react-responsive';
import nl2br from 'react-newline-to-break'; 
// import onClickOutside from "react-onclickoutside";

class Card2 extends React.Component{
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
		
		const info =[this.props.Title, this.props.MainKW, this.props.SubKW, this.props.Content, this.props.Year, this.props.PosX, this.props.PosY, this.props.Num, this.props.url, this.props.link, this.props.Month];

		return(
			
			<div>
			<MediaQuery minDeviceWidth={700}>
			
					<Draggable
				    handle=".handle"
				    defaultPosition={{x:info[5], y:info[6]}}
				    position={null}
				    onStart={Card2.handleStart}
				    onDrag={Card2.handleDrag}
				    onStop={Card2.handleStop}
				    onMouseDown={drag}
				    onTouchEnd={dragstop}>
				    	<div id={`card${info[7]}`}className='mover handle roboto-400 black-text' style={{zIndex:`${this.state.mCount}`}} onClick={toTop}>
				    	<div>
							<div className={this.state.clicked? 'purple-text':'blue-text'}>
							<div className='f25 ttl no-line-height'>
								<p>
									*&nbsp;<span className={this.state.toggle? 'invisible':''} title='drag'>{`${info[4]}`}_{`${info[1]}`}</span>&nbsp;
									
									<span className='f5 clicker'>
										<span className={this.state.underline? 'underline':''} onClick={click} onMouseOver={hoverIn} onMouseLeave={hoverOut}>
											{this.state.toggle? '↑close↑':'↓open↓'}
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
									<p className='f72 pa0 ma0 mt5 ttl x-line-height'>
									<span className='white bg-black'>{`${info[4]}`}.{`${info[10]}`}</span>
									<span className='bg-black black'>gaaap</span>
									<span className='bg-white white'>gaaap</span>
									<span className='white bg-black'>{`${info[0]}`}</span>
									<span className='bg-black black'>gaaap</span>
									</p>
									<p className='tj f72 line-height'><br/><span className='bg-white black'>{nl2br(info[3])}</span>
									<br/><span className='bg-white black'>~{`${info[1]}`} ~{`${info[2]}`}</span>
									</p>
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
export default Card2;