import React from 'react';
import Navigation from './Navigation.js';


function Header() {
  return (
    <header className='border-b font bold p-3 shadow flex justify-between items-center rounded-b-lg'>
    	<span>
    	Cookbook
    	</span>
    	<Navigation>
    	</Navigation>
    </header>
  );
}

export default Header;
