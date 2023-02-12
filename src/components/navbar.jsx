import React from 'react'
import '../css/taskboard.css'
import {Link} from 'react-router-dom'

import Logo from '../images/j-tec_logo.png'
import Message from '../images/message-icon.png'
import Notification from '../images/notif-icon.png'
import Account from '../images/account-icon.png'




export default function NavBar(){
    return(
        <div className='nav-container'>
                <Link path='/taskboard'><img id='jtec-logo' src={Logo} alt="logo of JTEC"/></Link>
                <h1 className='page-title'>TASKBOARD</h1>
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