import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
    
 <Header/>
 <ToastContainer/>
   <Outlet/>
    </div>
   
  )
}

export default App