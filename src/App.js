import React from 'react'
import {Route, Routes} from 'react-router-dom'

import SignUP from './components/sign-up.jsx'
import SignIn from './components/sign-in.jsx'
import TaskBoard from './components/taskboard.jsx'
import Request from './components/request.jsx'
import Admin from './components/admin.jsx'

export default function App() {
    return(
      <Routes>
        <Route path='/' element={<SignUP/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/taskboard' element={<TaskBoard/>} />
        <Route path='/request' element={<Request/>}/>
        <Route path='/admin' element={<Admin/>}/>    
      </Routes>
    )
}

