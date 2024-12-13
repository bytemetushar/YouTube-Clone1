import React, { useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu.svg'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.svg'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.svg'
import profile_icon from '../../assets/profile.png'
import { Link } from 'react-router-dom'

                        

const Navbar =({setSidebar})=>{

    const [value,setValue] = useState('');

    return(
        <nav className='flex-div'>
            <div className='nav-left fex-div'>
                <img className='menu-icon' onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
                <Link to='/ '><img className='logo' src={logo} alt="" /></Link>
            </div>

            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <img src={search_icon} alt="" />
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={upload_icon} alt="" />
                <img src={more_icon} alt="" />
                <img src={notification_icon} alt="" />
                <img src={profile_icon} alt="" />
            </div>
        </nav>
    )
}

export default Navbar