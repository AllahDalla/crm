import React from 'react'
import '../css/taskboard.css'

import Flag from '../images/green-flag.png'

export default function Query(){
    return(
        <div className="query-container">
            <div className='query-elements' id='query-checkbox-container'>
                <input type="checkbox" />
            </div>
            <div className='query-elements' id='query-name-container'>
                <p className='query-name'>Query Name</p>
            </div>
            <div className='query-elements' id='query-flag-container'>
                <img className='query-flag' src={Flag} alt="Priority color coded flag" />
            </div>
            <div className="query-elements" id='query-department-container'>
                <p className='query-department-text'>Det.</p>
                <p>Finance</p>
            </div>
            <div className='query-elements' id='query-name-text-container'>
                <p className='query-name-text'>Name of Sender</p>
            </div>
            <div className='query-elements' id='query-date-container'>
                <p className='query-date'>1/3/2023</p>
            </div>
            <div className='query-elements' id='query-issue-container'>
                <p className='query-issue-text'>Unsolved</p>
            </div>
        </div>
    )
}