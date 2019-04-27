import React from 'react'
import List from './List'

function dynamicSort(property) {
    var sortOrder = -1;
    if(property[0] === "-") {sortOrder = 1; property = property.substr(1);}
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

class ListList extends React.Component{	
	constructor({DyBase}){
		super();
		this.state={
		}
	}

	render(){
		this.props.DyBase.sort(dynamicSort('Year'));
		const ListComponent = this.props.DyBase.map((db,i)=>{
			return (
				<div>
					<List
					key={i}
					Num={i}
					PosX={15}
					PosY={600+(2019-this.props.DyBase[i].Year)*50}
					Code={this.props.DyBase[i].Code} 
					Year={this.props.DyBase[i].Year} 
					Category={this.props.DyBase[i].Category} 
					SubCategory={this.props.DyBase[i].SubCategory} 
					Title={this.props.DyBase[i].Title} 
					MainKW={this.props.DyBase[i].MainKW}
					SubKW={this.props.DyBase[i].SubKW} 
					Content={this.props.DyBase[i].Content}
					url={this.props.DyBase[i].url}
					/>
				</div>
			);
		})

		return(
			<div >
				{ListComponent}
			</div>
		);
	}
}

export default ListList;