import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { CiSearch } from "react-icons/ci";

function Expenses() {

  const groupsData = [
    { 
      discription: "Hotel Booking - Bali",
      trip: "Bali Adventure",
      user: "Sarah Chen", 
      category: "Accommodation",
      Amount: "$450.00", 
      date: "Mar 10"
    },
    { 
      discription: "Flight Tickets",
      trip: "Euro Backpacking",
      user: "James Miller", 
      category: "Transport", 
      Amount: "$1,200.00",
      date: "Apr 26" 
    },
    { 
      discription: "Group Dinner",
      trip: "Tokyo Exploration",
      user: "Lisa Wang", 
      category: "Food", 
      Amount: "$245.00",
      date: "Apr 8"
    },
    { 
      discription: "Safari Tour",
      trip: "Safari kenya",
      user: "David Kim", 
      category: "Activity", 
      Amount: "$380.00",
      date: "Feb 22"
    },
    { 
      discription: "Travel Insurance",
      trip: "IceLand Northern Lights", 
      user: "Alex Jhonson", 
      category: "Insurance", 
      Amount: "$120.00",
      date: "Apr 15" 
    },
  ];

  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='pt-[30px] flex items-center'>
          <div className='flex flex-col '>
            <p className='font-semibold text-2xl'>Expenses</p>
            <p className='text-gray-400 text-[13px] mt-[3px]'>Track Trip Expenses and Payments</p>
          </div>
        </div>
        <div className='bg-white p-[20px] rounded-[15px] shadow mb-[30px]'>
          <div className='flex items-center'>
            <h1 className='text-[16px] mb-[10px] text-gray-400'>RECENT EXPENSES</h1>
          </div>
          <div className='my-[20px]'>
            <table className='w-full text-left'>
              <thead>
                <tr className=' text-[#4e4d4d]'>
                  <th className='font-[500] py-[10px] pl-[20px]'>Discription</th>
                  <th className='font-[500] '>Trip</th>
                  <th className='font-[500] '>User</th>
                  <th className='font-[500] '>Category</th>
                  <th className='font-[500] '>Amount</th>
                  <th className='font-[500] '>Date</th>
                </tr>
              </thead>
              <tBody>
                {groupsData.map((item, index) => (
                  <tr key={index} className='hover:bg-[#093056]/3 border-t border-gray-100'>
                    <td className='text-[#4e4d4d] py-[10px] pl-[20px]'>{item.discription}</td>
                    <td className='text-gray-400'>{item.trip}</td>
                    <td className='text-gray-400'>{item.user}</td>
                    <td>
                      <span className={`text-[10px] px-[5px] text-center rounded-full 
                        ${item.category === "Accommodation" && "text-gray-600 bg-gray-100 border border-gray-300"}
                        ${item.category === "Transport" && "text-blue-500 bg-blue-100 border border-blue-300"}
                        ${item.category === "Food" && "text-green-600 bg-green-100 border border-green-300"}
                        ${item.category === "Activity" && "text-stone-900 bg-stone-300 border border-stone-400"}
                        ${item.category === "Insurance" && "text-gray-600 bg-gray-100 border border-gray-300"}
                        
                        `}
                      >
                        {item.category}
                      </span>
                    </td>
                    <td className='text-[#4e4d4d]'>{item.Amount}</td>
                    <td className='text-gray-400'>{item.date}</td>
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

export default Expenses