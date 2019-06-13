import React from 'react'
import Card from './Card'

function dynamicSort(property) {
    var sortOrder = -1;
    if(property[0] === "-") {sortOrder = 1; property = property.substr(1);}
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

class CardList extends React.Component{	
	constructor({DyBase}){
		super();
		this.state={
			mCount:'5'
		}
	}


	render(){
		var mouseCount=this.state.mCount;
		const click =()=> {
			mouseCount++;
			this.setState({mCount: mouseCount});
		}

		this.props.DyBase.sort(dynamicSort('Year'));
		
		var count19=0;
		const CardComponent = this.props.DyBase.map((db,i)=>{
			if(this.props.DyBase[i].Year===2019){count19++;}
			return (
				<div>
					<Card
					key={i}
					Num={i}
					PosX={250}
					PosY={document.documentElement.clientHeight-15-67*6+67*i+(2019-this.props.DyBase[i].Year)*67}
					Code={this.props.DyBase[i].Code} 
					Year={this.props.DyBase[i].Year}  
					Category={this.props.DyBase[i].Category} 
					SubCategory={this.props.DyBase[i].SubCategory} 
					Title={this.props.DyBase[i].Title} 
					MainKW={this.props.DyBase[i].MainKW}
					SubKW={this.props.DyBase[i].SubKW} 
					Content={this.props.DyBase[i].Content}
					url={this.props.DyBase[i].url}
					mCount={this.state.mCount}
					Link={this.props.DyBase[i].linkTo}
					/>
				</div>
			);
		})

		return(
			<div onClick={click}>
				{CardComponent}
			</div>
		);
	}
}

export default CardList;