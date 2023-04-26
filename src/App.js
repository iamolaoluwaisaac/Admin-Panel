import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Sidebar from './components/sidebar/Sidebar'
import TopBar from './components/topBar/TopBar'
import Home from './Pages/home/Home'
import User from './Pages/user/User'
import UserList from './Pages/userList/UserList'

const App = () => {
  return (
    <>
     <div>
      <TopBar/>
      <div className='container'>
        <Sidebar/>
        {/* <div className='others'>other pages</div> */}
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/users' element={<UserList/>}/>
          <Route exact path='/user/:userId' element={<User/>}/>
        </Routes>

      </div>
    </div>
    </>
  )
}

export default App
