import React from 'react'
import AdminHeader from '../components/AdminHeader';
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2, FiEye } from "react-icons/fi";

function Trips() {

  const tripsData = [
    { 
      tripName: "Bali Adventure",
      organizer: "Sarah Chen",
      members: 6, 
      dates: "Mar 10 - Mar 20",
      status: "active", 
    },
    { 
      tripName: "Tokyo Exploration",
      organizer: "Lisa Wang",
      members: 4, 
      status: "completed", 
      dates: "Apr 5 - Apr 15" 
    },
    { 
      tripName: "Euro Backpacking",
      organizer: "James Miller",
      members: 8, 
      status: "upcoming", 
      dates: "May 1 - Jun 1"
    },
    { 
      tripName: "Safari Kenya",
      organizer: "David Kim",
      members: 5, 
      status: "completed", 
      dates: "Feb 20 - Mar 2"
    },
    { 
      tripName: "Iceland Northern Lights",
      organizer: "Alex Johnson", 
      members: 3, 
      status: "upcoming", 
      dates: "Apr 20 - Apr 28" 
    },
  ];

  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='pt-[30px] flex justify-between items-center'>
          <div className='flex flex-col '>
            <p className='font-semibold text-2xl'>Trips</p>
            <p className='text-gray-400 text-[13px]'>Mointor and manage all trips</p>
          </div>
          <div>
            <button className='text-[#fff] bg-[#6C4E49] text-[13px] py-[5px] px-[10px] rounded-[10px]'>Create Trip</button>
          </div>
        </div>
        <div className='bg-white p-[20px] rounded-[15px] shadow mb-[30px]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[16px] mb-[10px] text-gray-400'>ALL TRIPS</h1>
            <div className='flex items-center bg-[#093056]/5 rounded-[10px] py-[5px] px-[10px]'>
              <CiSearch className='mr-[10px] text-gray-400 '/>
              <input type='text' placeholder='Search Users...' className='outline-0 placeholder-gray-400' />
            </div>
          </div>
          <div className='my-[20px]'>
            <table className='w-full text-left'>
              <thead>
                <tr className=' text-[#4e4d4d]'>
                  <th className='font-[500] py-[10px] pl-[20px]'>Trip Name</th>
                  <th className='font-[500] '>Organizer</th>
                  <th className='font-[500] '>Members</th>
                  <th className='font-[500] '>Dates</th>
                  <th className='font-[500] '>Status</th>
                  <th className='font-[500]  text-right pr-[20px]'>Actions</th>
                </tr>
              </thead>
              <tBody>
                {tripsData.map((item, index) => (
                  <tr key={index} className='hover:bg-[#093056]/3 border-t border-gray-100'>
                    <td className='text-[#4e4d4d] py-[10px] pl-[20px]'>{item.tripName}</td>
                    <td className='text-gray-400'>{item.organizer}</td>
                    <td className='text-[#4e4d4d]'>{item.members}</td>
                    <td>
                      <span className={`text-[12px] px-[5px] text-center rounded-full 
                        ${item.status === "active" && "text-green-600 bg-green-100 border border-green-300"}
                        ${item.status === "completed" && "text-blue-500 bg-blue-100 border border-blue-300"}
                        ${item.status === "upcoming" && "text-orange-500 bg-orange-100 border border-orange-300"}
                        
                        `}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className='text-gray-400'>{item.dates}</td>
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

export default Trips