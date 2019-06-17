import React, {Component} from 'react';
import Head from './Head';
import HeadName from './HeadName';
import Selector from './Selector';
import MSelector from './MSelector';
import CardList from './CardList';
import ListList from './ListList';

import Tabletop from 'tabletop';

import ScrollButton from './ScrollButton';
import MediaQuery from 'react-responsive';

class Main extends Component{
	constructor(){
		super();
		this.handleScroll = this.handleScroll.bind(this);
		this.state={
			searchfield1:'work',
			searchfield2:'recent',
			bbMove:true,
			data:[]
		}
	}

	onSearchChange1=(event)=>{this.setState({searchfield1: event.target.value});}
	onSearchChange2=(event)=>{this.setState({searchfield2 : event.target.value});}
	onSearchRefresh=(event)=>{
		this.setState({data:[]})
		Tabletop.init({
	      key: '1Bijtnm3NBgB0R2SDbpl8O9rHKVTHp7ueNTu57sNIHGU',
	      callback: sheet => {
	        this.setState({
	          data: sheet
	        })
	      },
	      simpleSheet: true
	    })
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		Tabletop.init({
	      key: '1Bijtnm3NBgB0R2SDbpl8O9rHKVTHp7ueNTu57sNIHGU',
	      callback: sheet => {
	        this.setState({
	          data: sheet
	        })
	      },
	      simpleSheet: true
	    })
	    // window.open("https://i.ibb.co/VtZq1nW/mm.gif", "PopupWin", "width=375,height=150,top=300,left=15");
	}
	componentWillUnmount() {window.removeEventListener('scroll', this.handleScroll);}
	handleScroll(event) {
	  if(window.scrollY>100)this.setState({bbMove:false});
	  if(window.scrollY<100)this.setState({bbMove:true});
	}

	render(){
		const { data } = this.state;
		const filterData = this.state.data.filter(at => {
			return(
				at.Category.toLowerCase().includes(this.state.searchfield1.toLowerCase()) 
				&& at.SubCategory.toLowerCase().includes(this.state.searchfield2.toLowerCase())
			);
		})

		return(
		  <div>
			<MediaQuery minDeviceWidth={700}>
				
			<div className=''>
				<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>				
				<div className=''>
					<CardList sF1={this.state.searchfield1} sF2={this.state.searchfield2} DyBase={filterData}/>
					<Selector searchChange1={this.onSearchChange1} searchChange2={this.onSearchChange2} searchRefresh={this.onSearchRefresh}/>		
				</div>
			</div>
			<Head/>
			<HeadName/>
			
			<div className='foot'></div>
			</MediaQuery>	
			
			<MediaQuery maxDeviceWidth={700}>
				<Head/>
				<div className='ml3'>
					<ListList sF1={this.state.searchfield1} sF2={this.state.searchfield2} DyBase={filterData}/>
					<MSelector searchChange1={this.onSearchChange1} searchChange2={this.onSearchChange2} searchRefresh={this.onSearchRefresh}/>		
				</div>
				<ScrollButton scrollStepInPx="50" delayInMs="8"/>
				<HeadName/>
			</MediaQuery>
		</div>
		);
	}
}

export default Main; 