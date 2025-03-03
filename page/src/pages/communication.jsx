
import { IoPersonOutline } from "react-icons/io5"
import { LuCloudUpload } from "react-icons/lu"
import { LiaQuestionCircle } from "react-icons/lia"
import { MdPhoneInTalk } from "react-icons/md";

export default function Communication(){
    return(
        <>
           <div className="flex flex-row w-full justify-center ">
           
                <div className="flex-3 m-5">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xl font-semibold p-2 text-gray-600">Communication Details</p>
                        <button className="h-10 w-36 bg-green-800 rounded-lg text-white flex justify-center items-center gap-3"><LuCloudUpload size={22} />Bulk Upload</button>   
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
                    </div>

                    <div className="flex flex-col gap-4 mt-4 ">
                    <p className="font-semibold ml-5">Phone Number 02</p>
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
                    </div>



                <div className="flex flex-col gap-4 mt-4 ">
                    <p className="font-semibold ml-5">Personal Mail-Id</p>
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
                    <p className="font-semibold ml-5">Official Mail-Id</p>
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
                    <p className="font-semibold ml-5">Location Of Residence</p>
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




                    <div className="flex-2   m-5 mt-12">
                        <p className="text-xl font-semibold p-2  text-gray-800">Current Address</p>
                        <textarea className="bg-gray-100 h-36 w-full rounded-lg resize-none p-2 text-xl" ></textarea>
                        <p className="text-xl font-semibold p-2  text-gray-800">Permanent address</p>
                        <textarea className="bg-gray-100 w-full h-36  rounded-lg resize-none p-2 text-xl" ></textarea>
                    </div>
            
            </div>
            

        </>
    )
}