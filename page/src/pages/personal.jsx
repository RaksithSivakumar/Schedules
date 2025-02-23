import Button from "../components/button"
import { FaSearch} from 'react-icons/fa'; // You can use any icon library, here we're using react-icons.
import { IoPersonOutline } from "react-icons/io5";
import { LiaQuestionCircle } from "react-icons/lia";
import ImageUploadLabel from "../components/imageupload";
import { LuCloudUpload } from "react-icons/lu";


export default function Personal()
{
    return(
        <>
            <div className="flex flex-row w-full justify-center ">
                <div className="flex-1 m-5 ">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xl font-semibold p-2 text-gray-600">Personal Details</p>
                        <button className="h-10 w-36 bg-green-800 rounded-lg text-white flex justify-center items-center gap-3"><LuCloudUpload size={22} />Bulk Upload</button>
                        
                        
                    </div>
                    <div className="flex flex-col gap-4 mt-4 ">
                        <p className="font-semibold ml-5">Student ID</p>
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
                        <p className="font-semibold ml-5">Student Name</p>
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
                        <p className="font-semibold ml-5">DOB</p>
                        <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                              <div className="pl-5">
                                <IoPersonOutline />
                              </div>
                                <input
                                type="date"
                                className="p-2 pl-4 pr-12 w-full outline-none border-none"
                              />
                              
                        </div>
                        <div className="flex flex-row">
                                <div className="flex gap-3 flex-col ">
                                <p className="font-semibold ml-5">Age</p>
                                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                    <div className="pl-5">
                                        <IoPersonOutline />
                                    </div>
                                        <input
                                        type='number'
                                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                    />
                                </div>
                                </div>

                                <div className="flex gap-3 flex-col ">
                                <p className="font-semibold ml-5">Blood Group</p>
                                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                    <div className="pl-5">
                                        <IoPersonOutline />
                                    </div>
                                        <input
                                        type='text'
                                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                    />
                                </div>
                            </div>
                              
                        </div>
                        <div className="flex flex-row">
                                <div className="flex gap-3 flex-col ">
                                <p className="font-semibold ml-5">Weight</p>
                                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                    <div className="pl-5">
                                        <IoPersonOutline />
                                    </div>
                                        <input
                                        type='number'
                                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                    />
                                </div>
                                </div>

                                <div className="flex gap-3 flex-col ">
                                <p className="font-semibold ml-5">Height</p>
                                <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                    <div className="pl-5">
                                        <IoPersonOutline />
                                    </div>
                                        <input
                                        type='number'
                                        className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                    />
                                </div>
                            </div>
                              
                        </div>
                        <p className="font-semibold ml-5 text-xl mt-2">Parent`s Occupation</p>
                                    <p className="font-semibold ml-5">Father Name</p>
                                    <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                        <div className="pl-5">
                                            <IoPersonOutline />
                                        </div>
                                            <input
                                            type='name'
                                            className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                        />
                                    </div>
                                    <p className="font-semibold ml-5">Mother Name</p>
                                    <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                        <div className="pl-5">
                                            <IoPersonOutline />
                                        </div>
                                            <input
                                            type='name'
                                            className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                        />
                                    </div>
                                    <p className="font-semibold ml-5">Father Occupation</p>
                                    <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                        <div className="pl-5">
                                            <IoPersonOutline />
                                        </div>
                                            <input
                                            type='name'
                                            className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                        />
                                    </div>
                                    <p className="font-semibold ml-5">Mother Occupation</p>
                                    <div className="flex items-center border rounded-lg bg-gray-200 border-none mx-5">
                                        <div className="pl-5">
                                            <IoPersonOutline />
                                        </div>
                                            <input
                                            type='name'
                                            className="p-2 pl-4 pr-12 w-full outline-none border-none"
                                        />
                                    </div>
                        
                        



                    </div>


                </div> 



                <div className="flex-1  m-5">
                    <p className="text-xl font-semibold p-2 text-gray-800">Add Profile Image</p>
                    <div className="flex justify-center items-center m-2 mt-5">
                        <ImageUploadLabel />
                    </div>
                </div> 
            </div>
        </>
    )
}