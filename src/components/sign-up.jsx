import React from 'react'
import {Link} from 'react-router-dom'
import '../css/sign_pages.css'

import JTECLogo from '../images/j-tec_logo.png'


export default function SignUp(){

    const [inputfield, setInputfield] = React.useState({
        department:"Finance",
        username:"",
        email:"",
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
                <label id='label-department' className='input-labels' htmlFor="department">Department</label>
                <select name='department' value={inputfield.department} onChange={handleInputfieldChange}>
                        <option name='finance' value='Finance'>Finance</option>
                        <option name='policy' value='Policy'>Policy</option>
                        <option name='test' value='Test'>Test</option>
                </select>
                <label id='label-username' className='input-labels' htmlFor='username'>Username</label>
                <input className='input-fields' name='username' type='text' value={inputfield.username} onChange={handleInputfieldChange}/>
                <label id='label-email' className='input-labels' htmlFor='email'>Email</label>
                <input className='input-fields' name='email' type='email' value={inputfield.email} onChange={handleInputfieldChange}/>
                <label id='label-password' className='input-labels' htmlFor='password'>Password</label>
                <input className='input-fields' name='password' type='password' value={inputfield.password} onChange={handleInputfieldChange}/>
                <button>Sign-Up</button>
                <p>already have an account? Click <Link to="/sign-in">here</Link></p>
            </div>
        </div>
    )
}