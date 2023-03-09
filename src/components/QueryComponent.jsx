import React from 'react'
import '../css/taskboard.css'
import {Link} from 'react-router-dom'

import Flag from '../images/green-flag.png'


export default function Query(props){
    return(
            <div className="query-container">
                <div className='query-elements' id='query-checkbox-container'>
                    <input type="checkbox" />
                </div>
                <div className='query-elements' id='query-name-container'>
                    <p className='query-name'>{props.query_name}</p>
                </div>
                <div className='query-elements' id='query-flag-container'>
                    <img className='query-flag' src={Flag} alt="Priority color coded flag" />
                </div>
                <div className="query-elements" id='query-department-container'>
                    <p className='query-department-text'>Det.</p>
                    <p>{props.dept}</p>
                </div>
                <div className='query-elements' id='query-name-text-container'>
                    <p className='query-name-text'>{props.sender_name}</p>
                </div>
                <div className='query-elements' id='query-date-container'>
                    <p className='query-date'>{props.date}</p>
                </div>
                <div className='query-elements' id='query-issue-container'>
                    <Link className='' to='/request'>
                    <p className='query-issue-text'>{props.issue}</p>
                    </Link>
                </div>
            </div>
    )
}