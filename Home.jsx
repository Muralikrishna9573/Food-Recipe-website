import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul className="navbar-many">
          <li key="home"><Link to="/">Home</Link></li>
          <li key="menu"><Link to="/menu">Menu</Link></li>
          <li key="contact"><Link to="/contact">Contact</Link></li>
          <li key="orders"><Link to="/orders">Orders</Link></li>
        </ul>
        
      </nav>
    </div>
  );
}

export default Home;
