import React from 'react'
import {Route, Routes} from 'react-router-dom'

import SignUP from './components/sign-up'
import SignIn from './components/sign-in'
import TaskBoard from './components/taskboard'

export default function App() {
  return(
    <Routes>
      <Route path='/' element={<SignUP/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/taskboard' element={<TaskBoard/>} />
    </Routes>
  )
}

