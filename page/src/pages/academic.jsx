
import { LuCloudUpload} from "react-icons/lu"
import { LiaQuestionCircle } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import Pdfupload from "../components/pdfupload";


export default function Academic()
{
    return(
        <>
            <div className="flex flex-row w-full justify-center ">

                <div className="flex-2 m-5">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-xl font-semibold p-2 text-gray-600">Academic Details</p>
                        <button className="h-10 w-36 bg-green-800 rounded-lg text-white flex justify-center items-center gap-3"><LuCloudUpload size={22} />Bulk Upload</button>   
                    </div>
                     <div className="flex flex-col gap-4 mt-4 ">
                    <p className="font-semibold ml-5">School</p>
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
                    <div className="flex flex-row">
                                <div className="flex gap-3 flex-col ">
                                <p className="font-semibold ml-5">10th Mark</p>
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
                                <p className="font-semibold ml-5">Percentage</p>
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
                        <div className="flex flex-row">
                                <div className="flex gap-3 flex-col ">
                                <p className="font-semibold ml-5">12th Mark</p>
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
                                <p className="font-semibold ml-5">Percentage</p>
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
                            <p className="font-semibold ml-5">School Medium</p>
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
                    <p className="font-semibold ml-5 text-xl mt-2">BIT Academics</p>
                            <p className="font-semibold ml-5">Department</p>
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
                            <p className="font-semibold ml-5">Semester Wise Marks</p>
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

                <div className="flex-1  m-5 mt-12">
                <p className="text-xl font-semibold p-2 text-gray-800">Add Document(Req)</p>
                    <div className="flex justify-center items-center m-2 mt-5">
                        <Pdfupload />
                    </div>
                </div>

            </div>
        </>
    )
}