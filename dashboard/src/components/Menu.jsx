import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {

  const[menu, setMenu]=useState('Dashboard');
  const[isProfileDropdown, setIsProfileDropdown]=useState(false);

  const handleMenuClick=(index)=>{
    setMenu(index);
  }

  const handleProfileClick=()=>{
    setIsProfileDropdown(!isProfileDropdown);
  }

  const menuClass="menu";
  const activeMenuClass="menu active";

  return (
    <div className="menu-container">
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: 'none'}} onClick={() => handleMenuClick(0)} to={'/'}>
            <p className={menu === 0 ? 'menu active': 'menu'}>Dashboard</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration: 'none'}} onClick={() => handleMenuClick(1)} to={'/orders'}>
            <p className={menu === 1 ? 'menu active': 'menu'}>Orders</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration: 'none'}} onClick={() => handleMenuClick(2)} to={'/holdings'}>
            <p className={menu === 2 ? 'menu active': 'menu'}>Holdings</p>
            </Link>
           
          </li>
          <li>
          <Link style={{textDecoration: 'none'}} onClick={() => handleMenuClick(3)} to={'/positions'}>
            <p className={menu === 3 ? 'menu active': 'menu'}>Positions</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration: 'none'}} onClick={() => handleMenuClick(4)} to={'/funds'}>
            <p className={menu === 4 ? 'menu active': 'menu'}>Funds</p>
            </Link>
          </li>
          <li>
          <Link style={{textDecoration: 'none'}} onClick={() => handleMenuClick(5)} to={'/apps'}>
            <p className={menu === 5 ? 'menu active': 'menu'}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        
      </div>

      <img src="logo.png" style={{ width: "50px" }} />

    </div>
  )
}

export default Menu