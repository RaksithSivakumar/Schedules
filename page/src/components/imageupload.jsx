import { useState } from 'react';
import { LuCloudUpload, LuX } from "react-icons/lu";

function ImageUploadLabel() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <input
        id="image-upload"
        type="file"
        className="hidden"
        onChange={handleImageChange}
      />

      {selectedImage ? (
        <div className="relative h-64 rounded-xl overflow-hidden">
          <img
            src={selectedImage}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-75"
          >
            <LuX className="h-5 w-5" />
          </button>
        </div>
      ) : (
        <label
          htmlFor="image-upload"
          className="flex flex-col items-center justify-center w-4/5 h-64 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center rounded-xl bg-green-50 text-green-700 p-3">
              <LuCloudUpload className="h-8 w-8" />
            </div>
            <p className="mt-3 text-md font-medium text-gray-700">Upload Image</p>
            <p className="mt-1 text-md text-gray-500">Upload a cover image for your image.</p>
            <p className="mt-1 text-md text-gray-500">
              File Format <span className="font-semibold">jpeg, png</span> Recommended
            </p>
            <p className="mt-1 text-md text-gray-500">
              Size <span className="font-semibold">600x600 (1:1)</span>
            </p>
          </div>
        </label>
      )}
    </div>
  );
}

export default ImageUploadLabel;
