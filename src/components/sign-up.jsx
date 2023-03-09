import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../css/sign_pages.css'

import JTECLogo from '../images/j-tec_logo.png'


export default function SignUp(){

    const [inputfield, setInputfield] = React.useState({
        department:"Corporate Services Finance",
        username:"",
        email:"",
        password:""
    })

    let navigation = useNavigate()
    
    function handleInputfieldChange(event){
        const {name, value} = event.target
        setInputfield(prevData => ({...prevData, [name]: value }));
    }

    function login(){
        const now = new Date()
        const sessionID = inputfield.username + now.getMinutes().toString() + now.getSeconds().toString()
        document.cookie = `sessionID=${sessionID}; path='/sign-in'`
    }

    async function handleSignUpClick(){
        var userObj = {
            method:"POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(inputfield)
        }


        await fetch("/users", userObj)
            .then(async response => {
                let res = await response.text()
                console.log(res)
                if(res === "Success"){
                    login()
                    alert("User account have been created successfully")
                    navigation("/taskboard")
                }else{
                    alert("User could not be added")
                }
            })

            .catch(async error => {
                console.log(await error)
            })

    }

    return (
        <div className='page-container'>
            <div className='sign-up_container'>
                <img className='jtec-logo' src={JTECLogo} alt='J-TEC official logo'/>
                <label id='label-department' className='input-labels' htmlFor="department">Department</label>
                <select name='department' value={inputfield.department} onChange={handleInputfieldChange}>
                        <option name='Corporate Services Finance' value='Corporate Services Finance'>Corporate Services Finance</option>
                        <option name='Office of the Commissioner' value='Office of the Commissioner'>Office of the Commissioner</option>
                        <option name='Standards Regulations and Instituional Support' value='Standards Regulations and Instituional Support'>Standards Regulations and Instituional Support</option>
                        <option name='Document Information and Resource Center' value='Document Information and Resource Center'>Document Information and Resource Center</option>
                        <option name='International Relations and Qualifications' value='International Relations and Qualifications'>International Relations and Qualifications</option>
                        <option name='Policy Planning and Research' value='Policy Planning and Research'>Policy Planning and Research</option>
                        <option name='Admin' value='Admin'>Admin</option>
                </select>
                <label id='label-username' className='input-labels' htmlFor='username'>Username</label>
                <input className='input-fields' name='username' type='text' value={inputfield.username} onChange={handleInputfieldChange}/>
                <label id='label-email' className='input-labels' htmlFor='email'>Email</label>
                <input className='input-fields' name='email' type='email' value={inputfield.email} onChange={handleInputfieldChange}/>
                <label id='label-password' className='input-labels' htmlFor='password'>Password</label>
                <input className='input-fields' name='password' type='password' value={inputfield.password} onChange={handleInputfieldChange}/>
                <button onClick={handleSignUpClick}>Sign-Up</button>
                <p>already have an account? Click <Link to="/sign-in">here</Link></p>
            </div>
        </div>
    )
}