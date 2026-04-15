import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { GoAlert } from "react-icons/go";
import { AiOutlineSafety } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

function SafetyMonitoring() {

  const safetyData = [
    { 
      user: "Emily Park",
      trip: "Thailand Solo",
      lastSeen: "3 hrs ago", 
      lastLocation: "Bangkok, Thailand", 
      alert: "warning",
      Status: "Ping User"
    },
    { 
      user: "Mike Torres",
      trip: "Safari Kenya",
      lastSeen: "6 hrs ago", 
      lastLocation: "Nairobi, Kenya", 
      alert: "critical",
      Status: "Send SOS" 
    },
    { 
      user: "Anna Schmidt",
      trip: "Iceland Trip",
      lastSeen: "2 hrs ago", 
      lastLocation: "Reykjavik, Iceland", 
      alert: "warning",
      Status: "Ping User"
    },
    { 
      user: "Tom Baker",
      trip: "Backpack SE Asia",
      lastSeen: "12 hrs ago", 
      lastLocation: "Unknown", 
      alert: "critical",
      Status: "Send SOS"
    },
    { 
      user: "Yuki Tanaka",
      trip: "Japan Foodie Tour", 
      lastSeen: "1 hr ago", 
      lastLocation: "Osaka, Japan", 
      alert: "info",
      Status: "Ping User" 
    },
  ];

  const safetyStats = [
    {
      title: 'Active Alerts',
      value: '5',
      change: '2 critical',
      icon: GoAlert,
    },
    {
      title: 'Users Monitored',
      value: '48',
      change: 'All active trips',
      icon: AiOutlineSafety,
    },
    {
      title: 'Check-in Rate',
      value: '87%',
      change: '+5% this week',
      icon: IoLocationOutline,
    },
    
  ];


  return (
    <div>
      <AdminHeader/>
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='pt-[30px] flex justify-between items-center'>
          <div className='flex flex-col '>
            <p className='font-semibold text-2xl'>Safety Monitoring</p>
            <p className='text-gray-400 text-[13px]'>Monitor traveler safety and alerts</p>
          </div>
        </div>
        <div className='flex gap-[20px]'>
          {safetyStats.map((item, index) => {
            const Icon = item.icon;

            return(
              <div key={index} className='bg-white p-[20px] flex justify-between shadow rounded-[15px] w-[100%]'>
                <div className='flex flex-col gap-[5px]'>
                  <text className='text-gray-400'>{item.title}</text>
                  <text className='font-semibold text-2xl'>{item.value}</text>
                  <text className='text-[13px] text-[rgb(66_139_66)]'>{item.change}</text>
                </div>
                <div>
                  <Icon className='bg-[#093056]/10 text-[#093056]/80 p-[10px] w-[43px] h-[43px] rounded-[20%]'/>
                </div>
            </div>
            );
          })}
          
        </div>
        <div className='bg-white p-[20px] rounded-[15px] shadow mb-[30px]'>
          <div className='flex justify-between items-center'>
            <h1 className='text-[16px] mb-[10px] text-gray-400'>Inactive Users & Alerts</h1>
          </div>
          <div className='my-[20px]'>
            <table className='w-full text-left'>
              <thead>
                <tr className=' text-[#4e4d4d]'>
                  <th className='font-[500] py-[10px] pl-[20px]'>User</th>
                  <th className='font-[500] '>Trip</th>
                  <th className='font-[500] '>Last Seen</th>
                  <th className='font-[500] '>Last Location</th>
                  <th className='font-[500] '>Alert Level</th>
                  <th className='font-[500]  text-right pr-[20px]'>Action</th>
                </tr>
              </thead>
              <tBody>
                {safetyData.map((item, index) => (
                  <tr key={index} className='hover:bg-[#093056]/3 border-t border-gray-100 '>
                    <td className='text-[#4e4d4d] py-[10px] pl-[20px]'>{item.user}</td>
                    <td className='text-gray-400'>{item.trip}</td>
                    <td className='text-gray-400'>{item.lastSeen}</td>
                    <td className='text-[#4e4d4d]'> 
                      <div className='flex items-center gap-[10px]'>
                        <IoLocationOutline/>
                        {item.lastLocation}
                      </div>
                    </td>
                    <td>
                      <span className={`text-[12px] px-[5px] text-center rounded-full 
                        ${item.alert === "warning" && "text-orange-600 bg-orange-100 border border-orange-300"}
                        ${item.alert === "critical" && "text-red-500 bg-red-100 border border-red-300"}
                        ${item.alert === "info" && "text-blue-500 bg-blue-100 border border-blue-300"}                        
                        `}
                      >
                        {item.alert}
                      </span>
                    </td>
                    <td className='text-right'>
                      <span className={`px-[10px] w-[50%] rounded-[10px] py-[5px] items-center mr-[10px]
                        ${item.Status === "Ping User" && "text-white bg-[#b87333] "}
                        ${item.Status === "Send SOS" && "text-white bg-red-500"}                       
                        `}
                      >
                        {item.alert}
                      </span>
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

export default SafetyMonitoring