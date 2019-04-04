import React from 'react';
import MediaQuery from 'react-responsive';

class Head extends React.Component{
	constructor(){
		super();
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			display: true
		};
	}
	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll);
	};

	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
	};

	handleScroll(event) {
	  if(window.scrollY>0)this.setState({display:false});
	  else this.setState({display:true});
	};

	render(){
		return(
			<div className='at-top'>
			<div className={this.state.display? 'transition black-text':'transition invisible'}>
			<MediaQuery minDeviceWidth={700}>
				<MediaQuery minWidth={1180}>
					<div className='roboto-400  f6 ml4 mt3 mb4 flex line-height'>						
							<p className='w-50 pt5'><a  target="_blank" href='resume.pdf' className={this.state.display? 'transition blue-text':'transition invisible'}>Resume&nbsp;↗</a>
								<br/><a target="_blank" href='https://www.linkedin.com/in/dvkoh/' className={this.state.display? 'transition blue-text':'transition invisible'}>LinkedIn&nbsp;↗</a>
								<br/><a target="_blank" href='https://www.instagram.com/dvkoh/' className={this.state.display? 'transition blue-text':'transition invisible'}>Instagram&nbsp;↗</a></p>							
			
							<p className='w-25 pl4 pr4 tj'>Majoring in design, I've always been fond of all things that look and feel good.
								<br/><br/>As an aspiring design researcher, I'm currently interested in the user-led exploration of novel technologies. 
								</p>
							
							<p className='w-25 pl4 mr5 tj'>* <a target="_blank" className={this.state.display? 'transition blue-text':'transition invisible'} href='https://id.kaist.ac.kr'>Department of Industrial Design, KAIST</a>, MSc(-ing)
								<br/>* Researcher member at <a target="_blank" className={this.state.display? 'transition blue-text':'transition invisible'} href='https://cixd.kaist.ac.kr'>CIxD Lab</a>
								<br/><br/>This page is an archive of my design works and experiences.</p>
					</div>		
				</MediaQuery>

				<MediaQuery maxWidth={1180}>
					<div className='roboto-400  f6 ml4 mt3 mb4 flex line-height'>						
							<p className='w-50 pt5'>
							<a target="_blank" href='resume.pdf'className={this.state.display? 'transition blue-text':'transition invisible'}>Resume&nbsp;↗</a>
							<br/><a target="_blank" href='https://www.linkedin.com/in/dvkoh/'className={this.state.display? 'transition blue-text':'transition invisible'}>LinkedIn&nbsp;↗</a>
							<br/><a target="_blank" href='https://www.instagram.com/dvkoh/'className={this.state.display? 'transition blue-text':'transition invisible'}>Instagram&nbsp;↗</a></p>							
							
							<p className='w-50 pl4 pr4 tj'>Majoring in design, I've always been fond of all things that look and feel good.
								<br/><br/>As an aspiring design researcher, I'm currently interested in the user-led exploration of novel technologies. 
								<br/><br/><span className='white'>Honest to god this page looks and works better in full screen.</span>
								</p>
					</div>
				</MediaQuery>
			</MediaQuery>	
			</div>
			<MediaQuery maxDeviceWidth={700}>

					<div className='roboto-400 f5 ml3 line-height pt3 '>
					    <div className=''>						
							<div className='black-text frame-momo'>
								<p className='f3'>Dong Yoon <span className='roboto-700'>Koh</span> </p>
								<p className='pt4 tj'>Majoring in design, I've always been fond of all things that look and feel good.
									Now, as an aspiring design researcher, I'm currently interested in the user-led exploration of novel technologies. 
									<br/><br/>This page is an archive of my design works and experiences. Honest to god it looks and works better on PC.
									<br/><br/>&nbsp;&nbsp;☞ <a target="_blank" href='resume.pdf'className=''>Resume</a>
									<br/>&nbsp;&nbsp;☞&nbsp;<a target="_blank" href='https://www.linkedin.com/in/dvkoh/'className=''>LinkedIn</a>
									<br/>&nbsp;&nbsp;☞&nbsp;<a target="_blank" href='https://www.instagram.com/dvkoh/'className=''>Instagram</a>
								</p>
							</div>
						</div>
					</div>
				
				
				

			</MediaQuery>
			</div>
		);
	}
}

export default Head;