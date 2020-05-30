import React,{useState}from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

function Navigation() {

	const [showMenu, setShowMenu]=useState(false)
	const transitions = useTransition(show, null, {
		from: { position: 'absolute', opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		})

	let menu
	let menuMask

	if (showMenu) {
		menu = 
		<div className ="fixed bg-white shadow top-0 left-0 w-4/5 h-full z-50 rounded-l-lg" > 
			MENU 
		</div>

		menuMask =
		<div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50 rounded-l-lg"
		onClick ={()=> setShowMenu(false)}>

		</div>

	}
  
  return (
  	
    <nav>
    	<span className="text-xl">
    	<FontAwesomeIcon 
    	icon={faBars} 
    	onClick ={()=> setShowMenu(!showMenu)} 
    	/>
    	</span>


    {





    }

    {menuMask}
    {menu}
    

    </nav>
    

    
  );
}

export default Navigation;
