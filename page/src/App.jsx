import image from './assets/image.png';
import { TbProgress } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { LuLayoutGrid } from "react-icons/lu";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { PiCirclesThreeLight } from "react-icons/pi";
import { SiAwsorganizations } from "react-icons/si";
import Menu from './pages/menu';
import Button from './components/button';
import { useState } from 'react';
import FormSection from './pages/infra/form';

function App() {
  const [activeTab, setActiveTab] = useState("Users");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-200">
        <div className="flex flex-row justify-between items-center bg-white p-5 max-h-14">
          <h1 className="ml-20 font-bold text-2xl">Dashboard</h1>
          <div className="flex flex-row gap-8 pr-5 justify-center items-center">
            <button><IoNotificationsSharp size={25} color='blue' /></button>
            <button className="w-10 h-10 rounded-full border-4 overflow-hidden">
              <img src={image} className="w-full h-full object-cover" />
            </button>
          </div>
        </div>
        <div className="fixed flex flex-col justify-between items-center bg-white min-h-screen w-20 top-0">
          <div className="flex justify-center items-center flex-col">
            <button className="text-4xl p-6"><TbProgress color="red" /></button>

            <div className="mt-3 flex flex-col justify-center items-center">
              <button className="text-5xl m-2"><LuLayoutGrid className="hover:bg-green-100 rounded-lg p-2" /></button>
              <button className="text-5xl m-2"><IoPeopleOutline className="hover:bg-green-100 rounded-lg p-2" /></button>
              <button className="text-5xl m-2"><IoFolderOpenOutline className="hover:bg-green-100 rounded-lg p-2" /></button>
            </div>
          </div>

          <button className="text-5xl m-2 mb-5">
            <IoIosLogOut color="red" className="hover:bg-green-100 rounded-lg p-2" />
          </button>
        </div>

        {/* NavBar Area */}
                <div className="bg-white mt-8 ml-56 mr-5 gap-5 justify-center items-center rounded-lg w-3/4 max-w-full">
          <ul className="flex flex-wrap p-2 gap-2 justify-between items-center">
            <li
              onClick={() => handleTabClick("Users")}
              className={`flex flex-row justify-center items-center gap-5 px-15 py-2 rounded-lg font-semibold text-xl ${activeTab === "Users" ? "bg-green-800 text-white" : "hover:bg-green-800 hover:text-white"}`}
            >
              <FaUsers /> Users
            </li>
            <li
              onClick={() => handleTabClick("Roles")}
              className={`flex flex-row justify-center items-center gap-5 px-15 py-2 rounded-lg font-semibold text-xl ${activeTab === "Roles" ? "bg-green-800 text-white" : "hover:bg-green-800 hover:text-white"}`}
            >
              <PiCirclesThreeLight /> Roles
            </li>
            <li
              onClick={() => handleTabClick("Infrastructure")}
              className={`flex flex-row justify-center items-center gap-5 px-15 py-2 rounded-lg font-semibold text-xl ${activeTab === "Infrastructure" ? "bg-green-800 text-white" : "hover:bg-green-800 hover:text-white"}`}
            >
              <SiAwsorganizations /> Infrastructure
            </li>
            <li
              onClick={() => handleTabClick("Schedules")}
              className={`flex flex-row justify-center items-center gap-5 px-15 py-2 rounded-lg font-semibold text-xl ${activeTab === "Schedules" ? "bg-green-800 text-white" : "hover:bg-green-800 hover:text-white"}`}
            >
              <RiCalendarScheduleLine /> Schedules
            </li>
          </ul>
        </div>

        <div className="bg-white mt-5 pb-4 ml-56 mr-5 gap-5 justify-center items-center rounded-lg w-3/4 min-h-100">
          <div className="flex flex-row pt-3 px-3 gap-3 justify-end items-center">
            <Button name="Create" />
            <button className="border-2 border-black rounded-lg w-20 h-10">Draft</button>
          </div>

          {activeTab === "Users" && <div><Menu /></div>}
          {/* {activeTab === "Roles" && <div></div>} */}
          {activeTab === "Infrastructure" && <div><FormSection/></div>}
          {/* {activeTab === "Schedules" && <div>Schedules Content</div>} */}
        </div>
        <br />
      </div>
    </>
  );
}

export default App;
