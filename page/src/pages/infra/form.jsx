import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { IoPersonOutline } from "react-icons/io5";
import { LiaQuestionCircle } from "react-icons/lia";
import ProgressBar from "./progressbar";
import VenueTypeForm from "./venu";
import ImageUploadLabel from "../../components/imageupload";
import FacilitiesPage from "./facility";

// Reusable styled input component (no extra horizontal margin)
const StyledInput = ({ placeholder, value, onChange, readOnly = false }) => {
  return (
    <div className="flex items-center rounded-lg bg-gray-200">
      <div className="pl-4">
        <IoPersonOutline size={20} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className="p-2 pl-4 pr-10 w-full outline-none bg-transparent"
      />
      <div className="pl-5">
        <LiaQuestionCircle size={20} className="mr-4" />
      </div>
    </div>
  );
};

function FormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [priority, setPriority] = useState("High");
  const [formData, setFormData] = useState({
    uniqueId: "SFB01",
    venueName: "Sunflower block-basement class-01",
    location: "Sunflower block",
    primaryPurpose: "Trainings",
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-10 w-full mx-auto">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} setCurrentStep={setCurrentStep} />

      {/* Step 1: Basic Details */}
      {currentStep === 1 && (
        <div className="flex flex-row gap-5">
          <div className="flex-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Basic Details</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <FontAwesomeIcon icon={faUpload} />
                <span>Bulk Upload</span>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Unique ID</label>
                <StyledInput
                  placeholder="Unique ID"
                  value={formData.uniqueId}
                  onChange={(e) =>
                    setFormData({ ...formData, uniqueId: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Venue Name</label>
                <StyledInput
                  placeholder="Enter Venue Name"
                  value={formData.venueName}
                  onChange={(e) =>
                    setFormData({ ...formData, venueName: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Location</label>
                <StyledInput
                  placeholder="Enter Location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Priority</label>
                <div className="flex flex-row space-x-2">
                  <span
                    className={`px-4 py-1 border rounded-lg cursor-pointer ${
                      priority === "High"
                        ? "text-red-500 border-red-500 bg-red-100"
                        : "text-gray-700 border-gray-300"
                    }`}
                    onClick={() => setPriority("High")}
                  >
                    High
                  </span>
                  <span
                    className={`px-4 py-1 border rounded-lg cursor-pointer ${
                      priority === "Medium"
                        ? "text-yellow-500 border-yellow-500 bg-yellow-100"
                        : "text-gray-700 border-gray-300"
                    }`}
                    onClick={() => setPriority("Medium")}
                  >
                    Medium
                  </span>
                  <span
                    className={`px-4 py-1 border rounded-lg cursor-pointer ${
                      priority === "Low"
                        ? "text-blue-500 border-blue-500 bg-blue-100"
                        : "text-gray-700 border-gray-300"
                    }`}
                    onClick={() => setPriority("Low")}
                  >
                    Low
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Primary Purpose</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={formData.primaryPurpose}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryPurpose: e.target.value })
                  }
                >
                  <option>Trainings</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Responsible Person</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  value={formData.primaryPurpose}
                  onChange={(e) =>
                    setFormData({ ...formData, primaryPurpose: e.target.value })
                  }
                >
                  <option>Trainings</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex-2">
            <h2 className="ml-5 text-xl font-semibold mb-10">Add Venue Image</h2>
            <ImageUploadLabel />
          </div>
        </div>
      )}

      {/* Step 2: Venue Type */}
      {currentStep === 2 && <VenueTypeForm />}

      {/* Step 3: Facilities */}
      {currentStep === 3 && <FacilitiesPage />}
    </div>
  );
}

export default FormSection;
