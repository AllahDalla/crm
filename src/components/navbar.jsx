import React, { useEffect } from 'react'
import '../css/taskboard.css'
import {Link, useLocation} from 'react-router-dom'

import Logo from '../images/j-tec_logo.png'
import Message from '../images/message-icon.png'
import Notification from '../images/notif-icon.png'
import Account from '../images/account-icon.png'




export default function NavBar(){

    function handleNavBarTitle(){
        let pathname = useLocation().pathname
        // console.log(pathname)
        if(pathname == "/taskboard"){
            return "TASKBOARD"
        }else if(pathname == "/request"){
            return "REQUEST"
        }else if(pathname == "/admin"){
            return "ADMINISTRATION"
        }else{
            return "UNKNOWN"
        }
    }
    
   

    return(
        <div className='nav-container'>
                <Link to='/taskboard'><img id='jtec-logo' src={Logo} alt="logo of JTEC"/></Link>
                <h1 className='page-title'>{handleNavBarTitle()}</h1>
                <nav>
                    <ul>
                        <li><img className='nav-icon' src={Message} alt='message icon navigation link'/></li>
                        <li><img className='nav-icon' src={Notification} alt='notification item navigation link'/></li>
                        <li><img className='nav-icon' src={Account} alt='acoount icon navigation link'/></li>
                    </ul>
                </nav>
        </div>
    )
}