import React from 'react'
import AdminHeader from '../components/AdminHeader';
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiEye } from "react-icons/fi";

function Groups() {

  const groupsData = [
    { 
      groupName: "Euro Backpackers",
      members: 24,
      trips: 5, 
      status: "active", 
      created: "Jan 2025"
    },
    { 
      groupName: "Asia Explorers",
      members: 18,
      trips: 3, 
      status: "active", 
      created: "Feb 2025" 
    },
    { 
      groupName: "Solo Travelers Club",
      members: 42,
      trips: 8, 
      status: "active", 
      created: "Dec 2024"
    },
    { 
      groupName: "Budget Wanderers",
      members: 15,
      trips: 2, 
      status: "inactive", 
      created: "Mar 2025"
    },
    { 
      groupName: "Adventure Seekers",
      members: 30, 
      trips: 6, 
      status: "active", 
      created: "Nov 2024" 
    },
  ];

  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='pt-[30px] flex justify-between items-center'>
          <div className='flex flex-col '>
            <p className='font-semibold text-2xl'>Groups</p>
            <p className='text-gray-400 text-[13px]'>Manage travel groups</p>
          </div>
          <div>
            <button className='text-[#fff] bg-[#6C4E49] text-[13px] py-[5px] px-[10px] rounded-[10px]'>Create Group</button>
          </div>
        </div>
        <div className='bg-white p-[20px] rounded-[15px] shadow mb-[30px]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[16px] mb-[10px] text-gray-400'>All Groups</h1>
            <div className='flex items-center bg-[#093056]/5 rounded-[10px] py-[5px] px-[10px]'>
              <CiSearch className='mr-[10px] text-gray-400 '/>
              <input type='text' placeholder='Search Users...' className='outline-0 placeholder-gray-400' />
            </div>
          </div>
          <div className='my-[20px]'>
            <table className='w-full text-left'>
              <thead>
                <tr className=' text-[#4e4d4d]'>
                  <th className='font-[500] py-[10px] pl-[20px]'>Group Name</th>
                  <th className='font-[500] '>Members</th>
                  <th className='font-[500] '>Trips</th>
                  <th className='font-[500] '>Created</th>
                  <th className='font-[500] '>Status</th>
                  <th className='font-[500]  text-right pr-[20px]'>Actions</th>
                </tr>
              </thead>
              <tBody>
                {groupsData.map((item, index) => (
                  <tr key={index} className='hover:bg-[#093056]/3 border-t border-gray-100'>
                    <td className='text-[#4e4d4d] py-[10px] pl-[20px]'>{item.groupName}</td>
                    <td className='text-[#4e4d4d]'>{item.members}</td>
                    <td className='text-[#4e4d4d]'>{item.trips}</td>
                    <td className='text-gray-400'>{item.created}</td>
                    <td>
                      <span className={`text-[12px] px-[5px] text-center rounded-full 
                        ${item.status === "active" && "text-green-600 bg-green-100 border border-green-300"}
                        ${item.status === "inactive" && "text-gray-500 bg-gray-100 border border-gray-300"}
                        
                        `}
                      >
                        {item.status}
                      </span>
                    </td>
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

export default Groups