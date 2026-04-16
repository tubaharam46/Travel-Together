import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { FaRegChartBar } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdOutlineFileDownload } from "react-icons/md";

function Reports() {

  const reportData = [
    {
      title: "Monthly User Growth Report",
      disc: "User registrations and retention metrics",
      date: "Mar 2025",
    },
    {
      title: "Trip Analytics",
      disc: "Destination popularity and trip completion rates",
      date: "Mar 2025",
    },
    {
      title: "Expense Summary",
      disc: "Total expenses by category and group",
      date: "Feb 2025",
    },
    {
      title: "Safety Incident Report",
      disc: "Alert history and response times",
      date: "Feb 2025",
    }
  ]


  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='flex pt-[30px] items-center gap-[10px]'>
          <FaRegChartBar className='bg-[#093056]/10 text-[#093056]/80 p-[10px] w-[45px] h-[45px] rounded-[25%]'/>
          <h1 className='font-semibold text-2xl'>Reports</h1>
        </div>
        <div className='grid grid-cols-2 gap-[20px]'>
          {
            reportData.map((item, index) => (
              <div key={index} className='flex justify-between items-start bg-white rounded-[10px] shadow p-[20px]'>
                <div className='flex gap-[15px]' >
                  <HiOutlineDocumentReport className='bg-[#093056]/10 text-[#093056]/80 p-[10px] w-[43px] h-[43px] rounded-[20%]' />
                  <div>
                    <h1 className='text-[15px] font-[500]'>{item.title}</h1>
                    <p className='text-gray-400 text-[13px]'>{item.disc}</p>
                    <span className='text-[12px] text-gray-400'>{item.date}</span>
                  </div>
                </div>
                <div>
                  <button className='flex items-center gap-[5px] bg-[#6C4E49] text-white px-[10px] py-[5px] rounded-[10px] cursor-pointer'>
                    <MdOutlineFileDownload />
                    Export
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Reports