import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      {/* <!-- Nav bar  --> */}
      <nav class='nav_container'>
        <div class='nav_left'>
          <Link to='/'>
            <img
              src='https://www.custify.com/blog/wp-content/uploads/2020/12/help-scout-vector-logo.png'
              alt='scoutLogo'
            />
          </Link>

          <a href='#'>Blog</a>
          <a href='#'>Contact</a>
          <Link to='/auth/about-us'>About</Link>
        </div>
        <div class='nav_right'>
          <button>Login</button>
          <button>Free Trial</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
