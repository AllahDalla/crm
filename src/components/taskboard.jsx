import React from 'react'
import '../css/taskboard.css'
import { useNavigate } from 'react-router-dom'

import NavBar from './navbar'
import Menu from './menu'
import DateIcon from '../images/date-icon.png'
import GreenFlag from '../images/green-flag.png'
import YellowFlag from '../images/yellow-flag.png'
import RedFlag from '../images/red-flag.png'
import ReportFileIcon from '../images/report-file-icon.png'
import SettingsIcon from '../images/settings-icon-jtec.png'
import Table from './table'






export default function TaskBoard(){

    let [isMenuOpen, setIsMenuOpen] = React.useState(false)
    let [isMounted, setIsMounted] = React.useState(false)
    let navigation = useNavigate()

    React.useEffect(() => {
        if(isMenuOpen){
            setIsMounted(true)
        }
    }, [isMenuOpen])

    React.useEffect(() => {
        const cookies = document.cookie.split(';')
        const sessionID = cookies.find(cookie => cookie.trim().startsWith('sessionID='));
        if(!sessionID){
            navigation('/sign-in')
        }
    }, [])


    function handleMenuClick(){
        setIsMenuOpen(prev => !prev)
    }

    return(
        <>
            <NavBar/>
            <div className="content-container">
            {isMounted && (<div className={`slide-out-menu ${isMenuOpen ? 'animating-menu-open':'animating-menu-close'}`}>
                    <ul className={isMenuOpen ? 'animating-menu-items-open':'animating-menu-items-close'}>
                        <li className={isMenuOpen ? 'animating-menu-items-open':'animating-menu-items-close'}><img className='menu-icon' id='report-file-icon' src={ReportFileIcon} alt="Icon that looks like a file" />Report</li>
                        <li className={isMenuOpen ? 'animating-menu-items-open':'animating-menu-items-close'}><img className='menu-icon' id='settings-icon' src={SettingsIcon} alt="Icon that looks like a gear" />Administration</li>
                    </ul>
                </div>)}
                <div className={`group1 ${isMenuOpen ? 'animating-adjust-content-out':''}`} id='group1'>
                    <Menu onClick={handleMenuClick} open={isMenuOpen}/>
                    <div className={`search-container ${isMenuOpen ? 'animating-adjust-content-out':''}`}>
                        <input id='search-input-field' type="text" placeholder='type a keyword...'/>
                        <button id='search-button'>search</button>
                    </div>
                </div>  
                <div className={`group2 ${isMenuOpen ? 'animating-adjust-content-out-g23':''}`} id='group2'>
                    <h2 id='filter-title'>FILTER</h2>
                    <div className='filter-inputs'>
                        <div className="select-all-container">
                            <input id='filter-checkbox' name='filter-checkbox' type="checkbox" />
                            <label htmlFor="filter-checkbox">Select All</label>
                        </div>
                        <div className="date-container">
                            <img id='date-filter-img' src={DateIcon} alt='date filter icon'/>
                        </div>
                        <div className="priority-container">
                            <label htmlFor="select-priority-options">Priority :</label>
                            <img id='flag' src={GreenFlag} alt='color coded flag -green'/>
                            <select className='select-options-filter' name='select-priority-options'>
                                <option value='Green'>Low</option>
                                <option value='Yellow'>Medium</option>
                                <option value='Red'>High</option>
                            </select>
                        </div>
                        <div className="department-container">
                            <label htmlFor="select-department-options">Department :</label>
                            <select className='select-options-filter' name="select-department-options">
                                <option value="Finance">Finance</option>
                                <option value="Policy">Policy</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                        <div className="issue-container">
                            <label htmlFor="select-issue-options">Issue :</label>
                            <select className='select-options-filter' name="select-issue-options">
                                <option value="Unsolved">Unsolved</option>
                                <option value="Solved">Solved</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`group3 ${isMenuOpen ? 'animating-adjust-content-out-g23':''}`} id='group3'>
                    <div className="table-container">
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}