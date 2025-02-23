


import { IoPersonOutline } from "react-icons/io5"
import { LiaQuestionCircle } from "react-icons/lia"
import { LuCloudUpload } from "react-icons/lu"

import { MdPhoneInTalk } from "react-icons/md"
import { useState } from "react"
import Popup from "../components/popup"

export default function Class()
{
    const [type,settype]=useState(null)
    const [popup,setpopup]=useState(false)
    return(
        <>
            <div className="flex flex-row w-full justify-center ">
            
            <div className="flex-3 m-5">

                <div className="flex flex-row justify-between items-center">
                    <p className="text-xl font-semibold p-2 text-gray-600">Class Advisior and Accomadation Details</p>
                    <button className="h-10 w-36 bg-green-800 rounded-lg text-white flex justify-center items-center gap-3"><LuCloudUpload size={22} />Bulk Upload</button>   
                </div>

                
               
                

                
                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Class Advisior Name</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <LiaQuestionCircle size={20} className="mr-4" />
                        </div>
                </div>
                </div>


                <div className="flex flex-col gap-4 mt-4 ">
                                    <p className="font-semibold ml-5">Phone Number 01</p>
                                        <div className="flex gap-2">
                                            <div className="flex-1">
                                                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                                <div className="pl-5">
                                                <IoPersonOutline />
                                                </div>
                                                <input
                                                type="text"
                                                placeholder="+91"
                                                className="p-2   w-full outline-none border-none"
                                                />
                                                
                                                </div>
                                            </div>
                                            <div className="flex-3">
                
                                            <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                            <div className="pl-5">
                                            <IoPersonOutline />
                                            </div>
                                            <input
                                            type="text"
                                            placeholder="Search..."
                                            className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                            />
                                            <div className="pl-5">
                                            <MdPhoneInTalk size={20} className="mr-4" />
                                            </div>
                                            </div>
                                            </div>
                
                                        </div>
                                    </div>+



                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Class Advisior Mail ID(official)</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="email"
                        placeholder="Email Here"
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <LiaQuestionCircle size={20} className="mr-4" />
                        </div>
                </div>
                </div>




                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Type</p>
                <div className="flex  border gap-5   border-none mx-5">
                    <div className="flex gap-4   justify-center items-center">
                        <input
                                type="checkbox"
                                onChange={()=>{settype(1)}}
                                checked={type === 1}
                                className={`size-5 ml-5 accent-green-700 ${type==1 ?"checked:true":""}`}
                        />
                        <p className="text-lg font-normal mb-1">Hosteller</p>
                    </div>
                    <div className="flex gap-4  justify-center items-center">
                        <input
                                type="checkbox"
                                onChange={()=>{settype(0)}}
                                checked={type === 0}
                                className={`size-5 ml-5 accent-green-700 ${type==0 ?"checked:true":"unchecked:true"}`}
                        />
                        <p className="text-lg font-normal mb-1">DayScholar</p>
                </div>
                </div>
                </div>

                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">College Transport</p>
                <div className="flex  border gap-5   border-none mx-5">
                    <div className="flex gap-4   justify-center items-center">
                        <input
                                type="checkbox"
                                className="size-5 ml-5 accent-green-700"
                        />
                        <p className="text-lg font-normal mb-1">No</p>
                    </div>
                    <div className="flex gap-4  justify-center items-center">
                        <input
                                type="checkbox"
                                className="size-5 ml-5 border-2  accent-green-700"
                        />
                        <p className="text-lg font-normal mb-1">Yes</p>
                </div>
                </div>
                </div>
                
                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Route</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="email"
                        placeholder="Email Here"
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <button className="p-3" onClick={()=>{setpopup(!popup)}}>Search</button>
                        {popup &&
                                <Popup/>
                        }
                        </div>
                </div>
                </div>

                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Stage</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="email"
                        placeholder="Email Here"
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <button className="p-3" onClick={()=>{setpopup(!popup)}}>Search</button>
                        {popup &&
                                <Popup/>
                        }
                        
                        </div>
                </div>
                </div>

                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Stopping</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="email"
                        placeholder="Email Here"
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <button className="p-3" onClick={()=>{setpopup(!popup)}}>Search</button>
                        {popup &&
                                <Popup/>
                        }
                        
                        </div>
                </div>
                </div>




                </div>
                
                    
                    
     <div className="flex-2  m-5 mt-12 w-full ">
    <div className="flex flex-col justify-center items-center m-2 mt-5 w-full">
            {type==0 && 
            <div>
                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Bus Number</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <LiaQuestionCircle size={20} className="mr-4" />
                        </div>
                </div>
                </div>

                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Stopping Time</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <LiaQuestionCircle size={20} className="mr-4" />
                        </div>
                </div>
                </div>

                </div>
                }
                {type==1 && 
                    <div>
                        <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Room Number</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <LiaQuestionCircle size={20} className="mr-4" />
                        </div>
                </div>
                </div>

                <div className="flex flex-col gap-4 mt-4 ">
                <p className="font-semibold ml-5">Room Type</p>
                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                        <div className="pl-5">
                        <IoPersonOutline />
                        </div>
                        <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                        />
                        <div className="pl-5">
                        <LiaQuestionCircle size={20} className="mr-4" />
                        </div>
                </div>
                </div>
                </div>
                }
        </div>

    </div>
    </div>
    </>
    )
}