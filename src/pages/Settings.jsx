import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import { IoSettingsOutline } from "react-icons/io5";

function Settings() {

  const [email, setEmail] = useState(true)
  const [safety, setSafety] = useState(true)
  const [weekly, setWeekly] = useState(false)

  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='flex pt-[30px] items-center gap-[10px]'>
          <IoSettingsOutline className='bg-[#093056]/10 text-[#093056]/80 p-[10px] w-[42px] h-[42px] rounded-[25%]'/>
          <h1 className='font-semibold text-2xl'>Settings</h1>
        </div> 
        <div className='bg-white w-[50%] p-[30px] rounded-[15px] shadow'>
          <div>
            <h1 className='text-[16px] mb-[10px] text-gray-400'>General Settings</h1>
          </div>
          <div className='mt-[20px]'>
            <div className='flex flex-col gap-[10px]'>
              <label>Platform Name</label>
              <input type='text' className='border-2 border-[#ccc] focus:outline focus:outline-[2px] focus:outline-[#093056]/20 rounded-[10px] px-[20px] py-[10px]'/>
            </div>            
            <div className='flex flex-col gap-[10px] mt-[20px]'>
              <label>Admin Email</label>
              <input type='email' className='border-2 border-[#ccc] focus:outline focus:outline-[2px] focus:outline-[#093056]/20 rounded-[10px] px-[20px] py-[10px]'/>
            </div>            
          </div>          
        </div>  
        <div className='bg-white w-[50%] p-[30px] rounded-[15px] shadow'>
          <div >
            <h1 className='text-[16px] mb-[10px] text-gray-400'>NOTIFICATIONS</h1>
          </div>
          <div className='flex flex-col gap-[20px] mt-[20px]'>
            <div className='flex justify-between items-center '>
              <h1>Email Notifications</h1>
              <div 
              onClick={() => setEmail(!email)}
                className={`flex items-center w-12 h-6  rounded-full transition-all duration-500 cursor-pointer
                ${email ?  "bg-[#093056]" : "bg-gray-300"}`}>
                <span className={`bg-white w-5 h-5 rounded-full transition-all duration-500
                  ${email ? "ml-[26px]" : "ml-[3px]"}`}/>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <h1>Safety Alert Notifications</h1>
              <div 
              onClick={() => setSafety(!safety)}
                className={`flex items-center w-12 h-6  rounded-full transition-all duration-500 cursor-pointer
                ${safety ?  "bg-[#093056]" : "bg-gray-300"}`}>
                <span className={`bg-white w-5 h-5 rounded-full transition-all duration-500
                  ${safety ? "ml-[26px]" : "ml-[3px]"}`}/>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <h1>Weekly Report Summary</h1>
              <div 
              onClick={() => setWeekly(!weekly)}
                className={`flex items-center w-12 h-6  rounded-full transition-all duration-500 cursor-pointer
                ${weekly ?  "bg-[#093056]" : "bg-gray-300"}`}>
                <span className={`bg-white w-5 h-5 rounded-full transition-all duration-500
                  ${weekly ? "ml-[26px]" : "ml-[3px]"}`}/>
            </div>
          </div>
          </div>
        </div>      
      </div>
    </div>
  )
}

export default Settings