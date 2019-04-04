import React from 'react';

const workOptions = ()=>{
	return(
		<select id='SubCategory' name='SubCategory' size='0' className=''>
			<option label='select' link='work' key='1'/>, 
			<option label='all' link='work' key='2'/>,
			<option label='digital' link='work' key='3'/>,
			<option label='tangible' link='work' key='4'/>
		</select>
	);
}

export default workOptions;

