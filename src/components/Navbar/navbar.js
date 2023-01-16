import React from 'react';
import {Link} from 'react-router-dom';
function navbar() {
  return (  
    <div>
        <nav className='Navbar'>
            <h3>LOGO</h3>
            <ul className='nav-links'>
                <Link to="/" className='Home'>
                    <li>Accueil</li>
                </Link>
                <Link to="/contact" className='Home'>
                    <li>Contact</li>
                </Link>
                <Link to="/signin" className='Home'>
                    <li>Signin</li>
                </Link>
                
            </ul>

        </nav>
    </div>
  )
}

export default navbar