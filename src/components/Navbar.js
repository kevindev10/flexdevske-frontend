import React, { useState,  } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener('resize', showButton);
  

  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changeBackground)

  return (
    <>
      <nav className={navbar ? 'navbar active' :'navbar'}>
        <div className='navbar-container'>
          <Link exact="true" to='/' className='navbar-logo dim' onClick={closeMobileMenu} style={{'fontFamily': 'Audiowide'}}>
            Flex DevsKe
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/our-work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            <li>
              {/*<Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>*/}
            </li>
          </ul>
         {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
