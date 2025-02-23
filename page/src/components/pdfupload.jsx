import { useState } from 'react';
import { LuCloudUpload, LuX } from "react-icons/lu";

function Pdfupload() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handlePdfChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let pdf = event.target.files[0];
      setSelectedPdf(pdf.name);
    }
  };

  const handleRemovePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <input
        id="pdf-upload"
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handlePdfChange}
      />

      {selectedPdf ? (
        <div className="flex items-center justify-between w-4/5 bg-gray-50 p-3 rounded-xl border border-gray-200">
          <p className="text-md font-medium text-gray-700">{selectedPdf}</p>
          <button
            onClick={handleRemovePdf}
            className="bg-gray-800 bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75"
          >
            <LuX className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <label
          htmlFor="pdf-upload"
          className="flex flex-col items-center justify-center w-4/5 h-64 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center rounded-xl bg-green-50 text-green-700 p-3">
              <LuCloudUpload className="h-8 w-8" />
            </div>
            <p className="mt-3 text-md font-medium text-gray-700">Upload PDF</p>
            <p className="mt-1 text-md text-gray-500">Upload a PDF file.</p>
            <p className="mt-1 text-md text-gray-500">
              File Format <span className="font-semibold">pdf</span> Recommended
            </p>
            <p className="mt-1 text-md text-gray-500">
              Size <span className="font-semibold">Max 10MB</span>
            </p>
          </div>
        </label>
      )}
    </div>
  );
}

export default Pdfupload;
