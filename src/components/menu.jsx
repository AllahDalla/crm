import React, { useEffect, useState } from 'react'
import '../css/taskboard.css'


import MenuIcon from '../images/menu-icon.png'
import MenuIconClose from '../images/menu-icon-close.png'


export default function Menu(props){

    return(
        <>
            <img id='menu-icon' src={props.open ? MenuIconClose : MenuIcon} alt='menu icon to navigate to pages' onClick={props.onClick}/>
        </>
    )
}