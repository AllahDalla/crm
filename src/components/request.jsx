import React, { useState } from 'react'
import '../css/request.css'

import NavBar from './navbar'
import GreenFlag from '../images/green-flag.png' 


export default function Request(){

    let [issue, setIssue] = useState({
        select_issue_options:"Unsolved",
        color:{backgroundColor:"#c10000"}
    })

    let [departmentSelection, setDepartmentSelection] = useState({
        department:""
    })

    // let [platform, setPlatform] = useState.// use one state for everything?

    function handleIssueChange(event){
        const {value} = event.target
        if(value === "Unsolved"){
            setIssue(
                {
                    select_issue_options:value,
                    color:{backgroundColor:"#c10000"}
                }
                )

        }else if(value === "Solved"){
            setIssue(
                {
                    select_issue_options:value,
                    color:{backgroundColor:"Green"}
                }
            )
        }else{
            setIssue(
                {
                    select_issue_options:value,
                    color:{backgroundColor:"Yellow"}
                }
            )
        }
        // setIssue(prev => ({...prev, select_issue_options:value}))
    }

    function handleDepartmentChange(event){
        const {value} = event.target
        setDepartmentSelection(prev => ({...prev, department:value}))
    }


    return(
        <>
        <NavBar/>
        <div className="request-container">
            <div className="request-wrapper-container">
                <div className='issue-and-priority-container'>
                    <div className='IP-elements' id='issue-element'>
                        <p>Issue:</p>
                        <select name="select-issue-options" id="select-issue-options" value={issue.issue_option} style={issue.color} onChange={handleIssueChange}>
                            <option value="Unsolved" style={{backgroundColor:"White", color:"Black"}}>Unsolved</option>
                            <option value="Solved" style={{backgroundColor:"White", color:"Black"}}>Solved</option>
                            <option value="Pending" style={{backgroundColor:"White", color:"Black"}}>Pending</option>
                        </select>
                    </div>
                    <div className='IP-elements' id='priority-element'>
                        <p>Priority:</p>
                        <img className='query-flag' id='request-flag' src={GreenFlag} alt="color coded flag" />
                    </div>
                </div>
                <div className="request-details-container">
                    <div className='request-fields'>
                        <label htmlFor="department-selection">Department Assigned</label>
                        <select name="depratment-selection" id="department-selection" value={departmentSelection.department} onChange={handleDepartmentChange}>
                            <option name='Corporate Services Finance' value='Corporate Services Finance'>Corporate Services Finance</option>
                            <option name='Office of the Commissioner' value='Office of the Commissioner'>Office of the Commissioner</option>
                            <option name='Standards Regulations and Instituional Support' value='Standards Regulations and Instituional Support'>Standards Regulations and Instituional Support</option>
                            <option name='Document Information and Resource Center' value='Document Information and Resource Center'>Document Information and Resource Center</option>
                            <option name='International Relations and Qualifications' value='International Relations and Qualifications'>International Relations and Qualifications</option>
                            <option name='Policy Planning and Research' value='Policy Planning and Research'>Policy Planning and Research</option>
                            <option name='Admin' value='Test'>Admin</option>
                        </select>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="individual-selection">Individual Assigned</label>
                        <select name="individual-selection" id="individual-selection">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="priority-selection">Set Priority</label>
                        <select name="priority-selection" id="priority-selection">
                            <option value='Green'>Low</option>
                            <option value='Yellow'>Medium</option>
                            <option value='Red'>High</option>
                        </select>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="platform-selction">Platform</label>
                        <select name="platform-selection" id="">
                            <option value="">Email</option>
                            <option value="">Twitter</option>
                            <option value="">Instagram</option>
                            <option value="">LinkedIn</option>
                        </select>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="name_of_sender">Name of Sender</label>
                        <input type="text" name='name_of_sender'/>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="incoming-message">Message</label>
                        <textarea name="incoming-message" id="incoming-message" cols="30" rows="10"></textarea>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="recipient-selection">Add other recipient</label>
                        <select name="recipient-selection" id="recipient-selection">
                            <option value=""></option>
                        </select>
                        <button id='add-recipient-btn'>Add Recipient</button>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="subject_of_message">Subject of Message</label>
                        <input type="text" name='subject_of_message'/>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="outgoing-message">Your Message</label>
                        <textarea name="outgoing-message" id="outgoing-message" cols="30" rows="10"></textarea>
                    </div>
                    <div className='request-fields'>
                        <label htmlFor="comments">Comments</label>
                        <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
                    </div>
                    <div className='request-fields' id='request-buttons'>
                        <button id='save-changes-btn'>Save Changes</button>
                        <button id='send-btn'>Send</button>

                    </div>
                </div>
            </div>
            <div className="request-wrapper-container"></div>
        </div>
        </>
    )
}