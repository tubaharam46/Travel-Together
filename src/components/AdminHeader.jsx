import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";

function AdminHeader() {
  return (
    <div className='bg-white fixed top-0 right-0 left-[200px] flex justify-between items-center z-50 px-[20px] py-[10px] shadow'>
        <div className='flex items-center bg-[#093056]/5 rounded-[10px] py-[5px] px-[10px]'>
            <CiSearch className='mr-[10px] text-gray-400 '/>
            <input type='text' placeholder='Search Anything...' className='outline-0 placeholder-gray-400' />
        </div>
        <div className='flex items-center gap-[15px]'>
            <IoIosNotificationsOutline className='text-[20px]' />
            <span className='bg-[#6C4E49] rounded-[50%] text-white p-[6px]'>AD</span>
        </div>
    </div>
  )
}

export default AdminHeader