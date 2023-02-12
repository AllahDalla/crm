import React from 'react'
import {Link} from 'react-router-dom'
import '../css/sign_pages.css'

import JTECLogo from '../images/j-tec_logo.png'


export default function SignUp(){

    const [inputfield, setInputfield] = React.useState({
        department:"Finance",
        username:"",
        password:""
    })
    
    function handleInputfieldChange(event){
        const {name, value} = event.target
        setInputfield(prevData => ({...prevData, [name]: value }));
    }


    return (
        <div className='page-container'>
            <div className='sign-up_container'>
                <img className='jtec-logo' src={JTECLogo} alt='J-TEC official logo'/>
                <label id='label-department' className='input-labels' htmlFor="select-options">Department</label>
                <select name='select-options'>
                        <option value='Finance'>Finance</option>
                        <option value='Policy'>Policy</option>
                        <option value='Admin'>Admin</option>
                </select>
                <label id='label-username' className='input-labels' htmlFor='username'>Username</label>
                <input className='input-fields' name='username' type='text' value={inputfield.username} onChange={handleInputfieldChange}/>
                <label id='label-password' className='input-labels' htmlFor='password'>Password</label>
                <input className='input-fields' name='password' type='password' value={inputfield.password} onChange={handleInputfieldChange}/>
                <button>Sign-In</button>
                <p>don't have an account? Click <Link to="/">here</Link></p>
            </div>
        </div>
    )
}