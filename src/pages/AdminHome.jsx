import React from 'react'
import {Link, Navigate, Route, Routes , NavLink} from 'react-router-dom';


import Dashboard from './Dashboard';
import User from './User';
import Trips from './Trips';
import Groups from './Groups';
import Expenses from './Expenses';
import SafetyMonitoring from './SafetyMonitoring';
import Notifications from './Notifications';
import Reports from './Reports';
import Settings from './Settings';

import Logo from '../assets/images/travel-logo.png'
import IconLogo from '../assets/images/icon-logo.png';

import { RiDashboardLine} from "react-icons/ri";
import { LuUsersRound } from "react-icons/lu";
import { MdCardTravel, MdOutlineGroups , MdAttachMoney } from "react-icons/md";
import { GoShield } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";





function AdminHome() {

  const menuItems = [
    {
      name: 'Dashboard',
      path: 'Dashboard',
      icon: <RiDashboardLine/>
    },
    { 
      name: "User",
      path: "User",
      icon: <LuUsersRound />
    },
    {
      name: "Trips",
      path: "Trips",
      icon: <MdCardTravel />
    },
    {
      name: "Groups",
      path: "Groups",
      icon: <MdOutlineGroups /> 
    },
    {
      name: "Expenses",
      path: "Expenses",
      icon: <MdAttachMoney />
    },
    { 
      name: "Safety Monitoring",
      path: "SafetyMonitoring",
      icon: <GoShield /> 
    },
    { 
      name: "Notifications",
      path: "Notifications",
      icon: <IoIosNotificationsOutline /> 
    },
    { 
      name: "Reports",
      path: "Reports",
      icon: <FaRegChartBar /> 
    },
    { 
      name: "Settings",
      path: "Settings",
      icon: <IoSettingsOutline /> 
    },
  ]

  return (
    
    <div className='flex'>
        {/* sidebar */}
        <div className='bg-[#093056] w-[200px] flex flex-col fixed top-0 left-0 h-full overflow-y-auto'>
          {/* logo */}
          <div className='flex py-[20px] items-center px-[10px]'>
            <img src={IconLogo} className='w-[40px] h-[40px] mr-[8px] bg-white rounded-[20px] p-[5px]' alt='icon logo' />
            <img src={Logo} className='w-[100px]' />
          </div>
          {/* separation line */}
          <div className='w-[100%] h-[1px] bg-[#c9c2c2]'></div>

          {/* menu links */}
          <div className='px-[10px] flex flex-col py-[15px] gap-[5px]'>
            {menuItems.map((item, index) => (
              <NavLink
              key={index}
              to={`/AdminHome/${item.path}`}
              className={({isActive}) => 
                `flex items-center px-1 py-1 rounded-md cursor-pointer text-[#c9c2c2] ${
                  isActive ? "bg-[#c9c2c2]/20 text-white" : "hover:bg-[#c9c2c2]/20 hover:text-white"
                }`
              }
            >
              <span className='mr-[12px]'>{item.icon}</span>
              {item.name}
            </NavLink>
            ))}
          </div>
        </div>
        <div className='flex-1 ml-[200px] bg-[#093056]/3 min-h-screen '>
          <Routes>
            <Route path='/' element={<Navigate to={'/AdminHome/Dashboard'}/>} />
            <Route path='Dashboard' element={<Dashboard/>}/>
            <Route path='User' element={<User/>}/>
            <Route path='Trips' element={<Trips/>} />
            <Route path='Groups'element={<Groups/>} />
            <Route path='Expenses' element={<Expenses/>} />
            <Route path='SafetyMonitoring'element={<SafetyMonitoring/>} />
            <Route path='Notifications' element={<Notifications/>} />
            <Route path='Reports'element={<Reports/>} />
            <Route path='Settings' element={<Settings/>} />
          </Routes>
        </div>
        
    </div>
    
  )
}

export default AdminHome