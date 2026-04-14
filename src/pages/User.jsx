import React from 'react'
import AdminHeader from '../components/AdminHeader';
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiEye } from "react-icons/fi";

function User() {

  const usersData = [
    { 
      name: "Sarah Chen",
      email: "sarah@email.com",
      trips: 12, 
      status: "active", 
      joined: "Jan 15, 2025"
    },
    { 
      name: "James Miller",
      email: "james@email.com",
      trips: 8, 
      status: "active", 
      joined: "Feb 3, 2025" 
    },
    { 
      name: "Emily Park",
      email: "emily@email.com",
      trips: 5, 
      status: "inactive", 
      joined: "Mar 22, 2025"
    },
    { 
      name: "David Kim",
      email: "david@email.com",
      trips: 15, 
      status: "active", 
      joined: "Dec 10, 2024"
    },
    { 
      name: "Lisa Wang",
      email: "lisa@email.com", 
      trips: 3, 
      status: "suspended", 
      joined: "Apr 1, 2025" 
    },
    { 
      name: "Alex Johnson",
      email: "alex@email.com", 
      trips: 7, 
      status: "active", 
      joined: "Jan 28, 2025"
    },
  ];

  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='pt-[30px] flex justify-between items-center'>
          <div className='flex flex-col '>
            <p className='font-semibold text-2xl'>Users</p>
            <p className='text-gray-400 text-[13px]'>Manage platform users</p>
          </div>
          <div>
            <button className='text-[#fff] bg-[#6C4E49] text-[13px] py-[5px] px-[10px] rounded-[10px]'>Add User</button>
          </div>
        </div>
        <div className='bg-white p-[20px] rounded-[15px] shadow mb-[30px]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[16px] mb-[10px] text-gray-400'>ALL USERS</h1>
            <div className='flex items-center bg-[#093056]/5 rounded-[10px] py-[5px] px-[10px]'>
              <CiSearch className='mr-[10px] text-gray-400 '/>
              <input type='text' placeholder='Search Users...' className='outline-0 placeholder-gray-400' />
            </div>
          </div>
          <div className='my-[20px]'>
            <table className='w-full text-left'>
              <thead>
                <tr className=' text-[#4e4d4d]'>
                  <th className='font-[500] py-[10px] pl-[20px]'>Name</th>
                  <th className='font-[500] '>Email</th>
                  <th className='font-[500] '>Trips</th>
                  <th className='font-[500] '>Status</th>
                  <th className='font-[500] '>Joined</th>
                  <th className='font-[500]  text-right pr-[20px]'>Actions</th>
                </tr>
              </thead>
              <tBody>
                {usersData.map((item, index) => (
                  <tr key={index} className='hover:bg-[#093056]/3 border-t border-gray-100'>
                    <td className='text-[#4e4d4d] py-[10px] pl-[20px]'>{item.name}</td>
                    <td className='text-gray-400'>{item.email}</td>
                    <td className='text-[#4e4d4d]'>{item.trips}</td>
                    <td>
                      <span className={`text-[12px] px-[5px] text-center rounded-full 
                        ${item.status === "active" && "text-green-600 bg-green-100 border border-green-300"}
                        ${item.status === "inactive" && "text-gray-500 bg-gray-100 border border-gray-300"}
                        ${item.status === "suspended" && "text-red-500 bg-red-100 border border-red-300"}
                        
                        `}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className='text-gray-400'>{item.joined}</td>
                    <td className='py-[10px] pr-[20px]'>
                      <div className='flex justify-end items-center gap-[5px]'>
                        <FiEye className='hover:bg-[#093056]/10 hover:text-[#105192] w-[30px] h-[30px] p-[8px] rounded-[13px]'/>
                        <FiEdit2 className='hover:text-[#6C4E49] hover:bg-[#6C4E49]/15 w-[30px] h-[30px] p-[8px] rounded-[13px]' />
                        <RiDeleteBinLine className='text-[#EF4444] hover:bg-[#EF4444]/8 w-[30px] h-[30px] p-[8px] rounded-[13px]' />
                      </div>
                    </td>
                  </tr>
                ))}
              </tBody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User