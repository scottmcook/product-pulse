import React from 'react'
import Image from 'next/image'
import UbiquitiLogo from '../../assets/ubiquitit-logo.png';

function NavBar() {
	return ( 
		<nav className='flex flex-row'>
			<Image src={UbiquitiLogo} alt="Ubiquiti Logo" />
			<div>Devices</div>
			<div className='justify-self-end'>Scott Cook</div>
		</nav> 
	);
}

export default NavBar;