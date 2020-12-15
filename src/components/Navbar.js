import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}> 
            Vittling
            <span className='lightbulb'>  
          <i class="fas fa-bread-slice"/>
            </span>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Current Stock
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/inventory'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Inventory
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/outofstock'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Out of stock
              </Link>
            </li>

            <li>
              <Link
                to='/shopping list'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Shopping list
              </Link>
            </li>
          </ul>    <Link  to='/shoppinglist' >               
              
          {button && <button to='/shoppinglist'>Shopping</button>}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
