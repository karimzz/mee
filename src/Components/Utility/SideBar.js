import React from 'react'
import "./Utility.css"
import logo from "./../../Image/logo.png" ; 
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    
  return (
    <aside>
        <div className='side-header'>
            <div className='logo'>
                <img src={logo} alt='logo' loading='lazy' />
            </div>
            <div className='menu'>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </div>
        <ul className='list-option'>
            <li className='active'> <a href="/"><span className="material-symbols-outlined">dashboard</span>Dashboard</a></li>
            <li> <a href="/notification"><span className="material-symbols-outlined">notifications</span>Notification</a> </li>
            <li> <a href="/product"> <span className="material-symbols-outlined">stacks</span> Product</a></li>
            <li> <a href="/offer"><span className="material-symbols-outlined">sell</span>Offer</a></li>
            <li> <a href="/"><span className="material-symbols-outlined">equalizer</span>Statitics</a></li>
            <li> <a href="/users"><span className="material-symbols-outlined">groups</span>Customers</a></li>
            <li> <a href="/"><span className="material-symbols-outlined" >wifi_protected_setup</span>Transections</a></li>
            <li> <a href="/"><span className="material-symbols-outlined">settings</span>Setting</a></li>
            <li> <a href="/"><span className="material-symbols-outlined">person</span>Profile</a></li>
        </ul>
    </aside>
  )
}

export default SideBar
