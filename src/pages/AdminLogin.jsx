import ActionButton from "../components/ActionButton"
import Input from "../components/Input"
import bgImg from "../assets/images/background-img.png"
import logo from "../assets/images/travel-logo.png"
import AdminHome from "./AdminHome"
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";





const AdminLogin = () => {
const [Show, Setshow] = useState(true);
const TogglePassword = () => {
    Setshow(!Show)    
}
    return(
        <div className="bg-center bg-no-repeat h-screen bg-[length:100%_100%]" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-[#093056]/50 flex items-start justify-center py-[40px] px-[30px] rounded-xl">
                    <div className="flex flex-col">
                        <img src={logo} alt="logo" className="w-40 h-auto mx-auto" />
                        <h2 className="mx-auto text-[#c9c2c2] text-[13px] font-[500] my-[8px] ">Admin Dashboard</h2>
                        <div className="my-[20px] flex flex-col">
                            <Input title="Email Address" label="Email Address" type="email"/>
                            <text className="text-[#eee8e8] my-[8px]">Password</text>
                            <div className="relative">
                                <input type={Show ? "password" : "text"} placeholder="Password" className="w-[350px] h-[43px] caret-white rounded-[10px] text-[#c9c2c2]" style={{border: "1px solid #c9c2c2", padding: "0px 18px", outline: 0}}/>
                                <div className="absolute ml-[320px] mt-[-28px] text-[#c9c2c2] cursor-pointer">
                                    {
                                        Show ? <BsEyeSlash onClick={TogglePassword}/> : <BsEye onClick={TogglePassword}/>
                                    }
                                </div>
                            </div>
                        </div>
                        <ActionButton link="/AdminHome"  title="Sign In to Dashboard" bgcolor="#6C4E49" color="white"/>
                    </div>
                </div> 
            </div>         
        </div>
    )
}
export default AdminLogin