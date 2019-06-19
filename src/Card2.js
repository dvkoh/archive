import React from 'react';
import Draggable from 'react-draggable';
import MediaQuery from 'react-responsive';
import nl2br from 'react-newline-to-break'; 

class Card2 extends React.Component{
	constructor(props){
		super(props);
		this.state={
			toggled: false,
			underline: false,
			mCount:'0'
		};
	}

	render(){
		const click =(event)=> {
			this.setState({toggled: true});
			if(this.props.active === false)this.props.activate(event);
			else this.props.deactivate(event);
		}
		const hoverIn =()=> {if(this.state.underline === false)this.setState({underline:true});}
		const hoverOut =()=> {if(this.state.underline === true)this.setState({underline:false});}

		const drag =()=>{this.setState({dragging:false})}
		const dragstop =()=>{this.setState({dragging:false})}

		const toTop=()=>{this.state.mCount=this.props.mCount;}
		
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
							<div className={this.state.toggled? 'purple-text':'blue-text'}>
							<div className='f25 ttl no-line-height'>
								<p>
									*&nbsp;<span className={this.props.active? 'invisible':''} title='drag'>{`${info[4]}`}_{`${info[1]}`}</span>&nbsp;
									
									<span className='f5 clicker'>
										<span className={this.state.underline? 'underline':''} id={info[0]} onClick={click} onMouseOver={hoverIn} onMouseLeave={hoverOut}>
											{this.props.active? '↑close↑':'↓open↓'}
										</span>
									</span>
								</p>
							</div>
							</div>
									
							<div className={this.props.active? 'card-width':'plsHide'} >
								<div className='img-position'>
								<img src={`${info[8]}`} alt=''/>
								</div>
								<div className=''>		
									<p className='f72 pa0 ma0 mt4 ttl line-height'>
									<span className='white bg-black'>{`${info[4]}`}.{`${info[10]}`}</span>
									<span className='bg-black black'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span className='bg-white white'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
									<span className='white bg-black'>{`${info[0]}`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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