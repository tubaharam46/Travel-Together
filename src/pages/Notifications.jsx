import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";




function Notifications() {

  const notifications = [
    {
      type: "warning",
      title: "Safety Alert: Mike Torres",
      disc: "User has been inactive for 6 hours in Nairobi, Kenya",
      isNew: true,
      time: "10 min ago"
    },
    {
      type: "info",
      title: "New Group Created",
      disc: "'Mountain Trekkers' group was created by Anna Schmidt",
      isNew: true,
      time: "1 hr ago"
    },
    {
      type: "success",
      title: "Trip Completed",
      disc: "Lisa Wang completed 'Tokyo Exploration' trip",
      isNew: false,
      time: "2 hrs ago"
    },
    {
      type: "warning",
      title: "Expense Flagged",
      disc: "Unusual expense of $1,200 flagged for review",
      isNew: false,
      time: "3 hrs ago"
    },
    {
      type: "info",
      title: "New User Registration",
      disc: "5 new users registered in the last 24 hours",
      isNew: false,
      time: "5 hrs ago"
    },
  ]

  const iconMap = {
    warning : <IoWarningOutline />,
    info : <AiOutlineInfoCircle />,
    success: <IoMdCheckmarkCircleOutline />,
  };

  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='flex pt-[30px] items-center gap-[10px]'>
          <IoIosNotificationsOutline className='bg-[#093056]/10 text-[#093056]/80 p-[10px] w-[45px] h-[45px] rounded-[25%]'/>
          <h1 className='font-semibold text-2xl'>Notifications</h1>
        </div>
        <div className='flex flex-col gap-[10px]'>
          {
            notifications.map((item, index) => (
              <div key={index} className={`${item.isNew ? "bg-[#093056]/3 border-l-3 border-[#093056]" : "bg-white"} flex items-center justify-between hover:shadow px-[15px] py-[10px] rounded-[10px]`}>
                <div className='flex items-center gap-[12px]'>
                  <div className={`p-[8px] rounded-[13px] text-[20px]
                    ${item.type === "warning" && "text-red-700  bg-gray-200"}
                    ${item.type === "info" && "text-blue-700  bg-gray-200"} 
                    ${item.type === "success" && "text-green-700 bg-gray-200"}`}>
                    {iconMap[item.type]}
                  </div>
                  <div>
                    <div className='flex gap-[10px]'>
                      <h1 className='text-[15px] font-[500]'>{item.title}</h1>
                      {
                        item.isNew && (
                          <span className='bg-[#093056]/80 text-white px-[10px] rounded-[15px] text-[10px] flex items-center' >
                            New
                          </span>
                        )
                      }
                    </div>
                    <p className='text-gray-400 text-[13px]'>{item.disc}</p>
                  </div>
                </div>
                <div>
                  <span className='text-[12px] text-gray-400'>{item.time}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Notifications