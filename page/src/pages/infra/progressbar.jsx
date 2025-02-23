import React from "react";

function ProgressBar({ currentStep, setCurrentStep }) {
  const sections = [
    { id: 1, label: "Basic" },
    { id: 2, label: "Venue Type" },
    { id: 3, label: "Facilities" },
  ];

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-10">
        {sections.map((section, index) => (
          <div key={section.id} className="flex flex-row items-center justify-center gap-5">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setCurrentStep(section.id)}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 font-bold text-lg transition-all duration-300 ${
                  currentStep >= section.id ? "bg-green-600 text-white border-green-600" : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {currentStep > section.id ? "✔️" : `0${section.id}`}
              </div>
              <div className={`text-lg font-semibold mt-2 ${currentStep >= section.id ? "text-gray-900" : "text-gray-500"}`}>
                {section.label}
              </div>
            </div>
            <div className="flex justify-center items-center mb-7">
                {index < sections.length - 1 && <div className={`h-1 w-16 ${currentStep > section.id ? "bg-green-600" : "bg-gray-300"}`} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar;