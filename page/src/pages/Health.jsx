
import { IoPersonOutline } from "react-icons/io5"
import { LiaQuestionCircle } from "react-icons/lia"
import { LuCloudUpload } from "react-icons/lu"
import Pdfupload from "../components/pdfupload"


export default function Health()
{
    return(
        <>
             <div className="flex flex-row w-full justify-center ">
            
                            <div className="flex-3 m-5">

                                <div className="flex flex-row justify-between items-center">
                                    <p className="text-xl font-semibold p-2 text-gray-600">Health Details</p>
                                    <button className="h-10 w-36 bg-green-800 rounded-lg text-white flex justify-center items-center gap-3"><LuCloudUpload size={22} />Bulk Upload</button>   
                                </div>

                                <div className="flex flex-col gap-4 mt-4 ">
                                <p className="font-semibold ml-5">Any Disabilities</p>
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
                                <p className="font-semibold ml-5">Any health issues mention here</p>
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
                                <div className="flex-2  m-5 mt-12">
                <p className="ml-3 text-xl font-semibold p-2 text-gray-800">Add Fitness Certificate</p>
                    <div className="flex justify-center items-center m-2 mt-5">
                        <Pdfupload />
                    </div>
                </div>


            </div>
        </>
    )
}