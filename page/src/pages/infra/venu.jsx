import { X, ChevronDown, User } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";



function VenueTypeForm() {
  return (
    <div className="space-y-6 flex flex-row gap-7">
    <div className="flex-3">
    <div className="">
        <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold">Basic Details</h2>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                      <FontAwesomeIcon icon={faUpload} />
                      <span>Bulk Upload</span>
                    </button>
                  </div>
        <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <label className="block mb-2 font-medium">Capacity of Venue:</label>
        <select className="w-full p-2 border rounded bg-gray-100  border-none">
          <option>60 persons</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label className="block mb-2 font-medium">Evacuation Path:</label>
        <select className="w-full p-2 border rounded bg-gray-100 border-none">
          <option>Basement</option>
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label className="block mb-2 font-medium">Evacuation Path Maintenance Frequency:</label>
            <div className="flex  border gap-5   border-none ">
                <div className="flex gap-4   justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Once</p>
                </div>
                <div className="flex gap-4  justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 border-2  accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Weekly</p>
                </div>
                <div className="flex gap-4   justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Monthly</p>
                </div>
                <div className="flex gap-4   justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Custom</p>
                </div>
            </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="block mb-2 font-medium">Usage Frequency:</label>
        <div className="flex  border gap-5   border-none ">
                <div className="flex gap-4   justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Once</p>
                </div>
                <div className="flex gap-4  justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 border-2  accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Weekly</p>
                </div>
                <div className="flex gap-4   justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Monthly</p>
                </div>
                <div className="flex gap-4   justify-center items-center">
                    <input
                            type="checkbox"
                            className="size-5 ml-5 accent-green-700"
                    />
                    <p className="text-lg font-normal mb-1">Custom</p>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
      
      <div className="flex-2 ">
                <div className="flex flex-col gap-3 ">
                    <label className="block mb-2 font-medium">Accessibility</label>
                    <div className="flex items-center  space-x-2 bg-gray-100 p-2 rounded">
                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                        <span className="text-green-700 font-medium">Stairs</span>
                        <button className="ml-2 text-red-500">
                        <X size={14} />
                        </button>
                    </div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                    <label className="block mb-2 font-medium">Ventilation Type:</label>
                    <div className="flex items-center bg-gray-100 p-2 rounded">
                    <User size={18} className="text-gray-600 mr-2" />
                    <span className="text-gray-800">Open space</span>
                    <ChevronDown size={18} className="ml-auto text-gray-600" />
                    </div>
                </div>
    </div>
    </div>
  );
}

export default VenueTypeForm;