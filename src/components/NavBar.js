import React from 'react'
import logo from '../logo.svg'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../index.css"

export const NavBar = () => {
  return (
    <div className='bgc'>
      <div className='fjb'>
        <NavLink to="/">
          <img className='icon' src={logo}></img>
        </NavLink>
          <div className='fe'>
            <NavLink to="/">
            <p className='mgn'>Home</p>
            </NavLink>
            <NavLink to="/cart">
            <FaShoppingCart className='mgn-tp'></FaShoppingCart>
            </ NavLink>
          </div>
      </div>
    </div>
  )
}
