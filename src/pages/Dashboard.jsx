import React from 'react'

import AdminHeader from "../components/AdminHeader";
import { LuUsersRound } from "react-icons/lu";
import { MdCardTravel, MdOutlineGroups} from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { ResponsiveContainer, BarChart, YAxis , XAxis , Tooltip, Bar, CartesianGrid, Line, LineChart, AreaChart , Area} from 'recharts';

function Dashboard() {
  const dashboardStats = [
    {
      title: 'Total Users',
      value: '1,280',
      change: '+12.5% from last month',
      icon: LuUsersRound,
    },
    {
      title: 'Active Trips',
      value: '48',
      change: '+8 new this week',
      icon: MdCardTravel,
    },
    {
      title: 'Travel Groups',
      value: '156',
      change: '+3.2% from last month',
      icon: MdOutlineGroups,
    },
    {
      title: 'Revenue',
      value: '$24,500',
      change: '+18% from last month',
      icon: FaArrowTrendUp ,
    },
  ]
  const tripData = [
    { name: "Jan", trips: 65},
    { name: "Feb", trips: 80},
    { name: "Mar", trips: 110},
    { name: "Apr", trips: 95},
    { name: "May", trips: 130},
    { name: "Jun",trips: 150},
  ];

  const userGrowthData = [
    { name: "Jan", users: 420},
    { name: "Feb", users: 580},
    { name: "Mar", users: 720},
    { name: "Apr", users: 890},
    { name: "May", users: 1050},
    { name: "Jun", users: 1280}
  ]

  const Activities = [{
    initials: 'SC',
    name: 'Sarah Chen',
    action: 'Created trip to Bali',
    tag: 'Trip',
    time: '2 min ago'
  },
  {
    initials: 'JM',
    name: 'James Miller',
    action: "Joined group 'Euro Backpackers'",
    tag: 'Group',
    time: '15 min ago'
  },
  {
    initials: 'EP',
    name: 'Emily Park',
    action: "Added expense $245.00",
    tag: 'Expense',
    time: '32 min ago'
  },
  {
    initials: 'DK',
    name: 'David Kim',
    action: "Safety alert triggered",
    tag: 'Alert',
    time: '1 hr ago'
  },
  {
    initials: 'LW',
    name: 'Lisa Wang',
    action: "Completed trip to Tokyo",
    tag: 'Trip',
    time: '2 hr ago'
  },

]

const tagStyle = {
  Trip: 'bg-blue-100 text-blue-700 border border-blue-700',
  Group: 'bg-green-100 text-green-700 border border-green-700',
  Expense: 'bg-orange-100 text-orange-700 border border-orange-700',
  Alert: 'bg-red-100 text-red-600 border border-red-700'
}


  return (
    <div>
      <AdminHeader/>      
      <div className='mt-[55px] px-[20px] flex flex-col gap-[30px]'>
        <div className='flex flex-col pt-[30px]'>
          <p className='font-semibold text-2xl'>Dashboard</p>
          <p className='text-gray-400 text-[13px]'>Overview of your travel management platform</p>
        </div>
        <div className='flex gap-[20px]'>
          {dashboardStats.map((item, index) => {
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
        <div className='flex gap-[20px]'>
          <div className='w-[100%] h-[300px] bg-white p-[20px] pb-[40px] text-gray-400 text-[13px] rounded-[15px] shadow'>
            <h1 className='text-[16px] mb-[10px]' >Trips Overview</h1>
            <ResponsiveContainer>
              <BarChart data={tripData}>
                <CartesianGrid vertical={false} strokeDasharray="3"/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#999b9e'}}/>
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#999b9e'}} />
                <Tooltip itemStyle={{color: '#999b9e'}} contentStyle={{borderRadius: "8px"}}/>
                <defs>
                  <linearGradient id="tripGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#114a83" />
                    <stop offset="100%" stopColor="#819dbb" /> 
                  </linearGradient>
                </defs>
                <Bar dataKey="trips" radius={[6, 6, 0, 0]}  fill="url(#tripGradient)"/>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='w-[100%] h-[300px] bg-white p-[20px] pb-[40px] text-gray-400 text-[13px] rounded-[15px] shadow border-none'>
            <h1 className='text-[16px] mb-[10px]' >User Growth</h1>
            <ResponsiveContainer width={"100%"} height={"100%"}>
              <AreaChart data={userGrowthData}>
                <CartesianGrid vertical={false} strokeDasharray="3"/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#999b9e'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#999b9e'}}/>
                <Tooltip itemStyle={{color: '#999b9e'}} contentStyle={{borderRadius: "8px"}}/>
                <defs>
                  <linearGradient id="userGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#114a83" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#819dbb" stopOpacity={0}/> 
                  </linearGradient>
                </defs>
                <Area dataKey="users" fill='url(#userGradient)' type={'monotone'} dot={{r : 3, fill: '#fff'}}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='bg-white p-[20px] rounded-[15px] shadow mb-[30px]'>
          <h1 className='text-[16px] mb-[10px] text-gray-400'>Recent Activity</h1>
          <div>
            {
              Activities.map((item, index) => (
                <div key={index} className='flex justify-between py-[8px] px-[15px] transition-all duration-200 cursor-pointer hover:bg-[#093056]/3 rounded-[10px]'>
                  <div className='flex justify-center items-center gap-[15px]'>
                    <div className='bg-[#093056]/10 text-[#093056]/80 p-[10px] text-[13px] font-[500] rounded-[30%]'>{item.initials}</div>
                    <div>
                      <p className='text-[#000] font-[500] text-[14px]'>{item.name}</p>
                      <p className='text-[12px] text-gray-400'>{item.action}</p>
                    </div>
                  </div>
                  <div className='flex justify-center items-center gap-[8px]'>
                    <p className={`${tagStyle[item.tag]} rounded-full px-[8px] text-[10px]`}>{item.tag}</p>
                    <p className='text-[10px] text-gray-400'>{item.time}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard