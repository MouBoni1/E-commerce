import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import navprofile from '../../assets/profile_admin.jpg'
import dropdown from '../../assets/dropdown_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
        <img src={navlogo} alt="" className="nav-logo" />
        <p>Shopper</p>
        <span>Admin Panel</span>
        </div>
        <div className="profile">
            <img src={navprofile} alt="" className="nav-profile" />
            <img src={dropdown} alt="" className="dropdown" />
        </div>

        </div>
  )
}

export default Navbar