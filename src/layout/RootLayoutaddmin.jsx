import React from 'react'
import { Outlet } from 'react-router-dom'
import Dasboard from '../page/homepage/Dasboard/Dasboard'
import ChatBot from '../page/homepage/addminpage/ChatBot/ChatBot'
export default function RootLayoutaddmin() {
  return (
    <div>
    <Dasboard/>
    <ChatBot/>
   <Outlet/>    

      
    </div>
  )
}
