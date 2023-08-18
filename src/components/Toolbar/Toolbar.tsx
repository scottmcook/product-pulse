import React from 'react'

function Toolbar() {
	return ( 
		<div className='flex justify-between border border-y-[#ededf0] px-7'>
			<input className='background-color--light' placeholder='Search' />

			<div>
				<div>Filter</div>
			</div>
		</div>
	 );
}

export default Toolbar;