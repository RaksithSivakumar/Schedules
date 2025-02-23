
function Buttons() {
  return (
    <div className="flex justify-end mt-4 mr-4">
      <button className="border border-green-600 text-green-600 hover:bg-green-700 hover:text-white font-semibold px-5 py-2 rounded-lg shadow-md transition">
        Create
      </button>
      <button className="border border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white font-semibold px-5 py-2 rounded-lg shadow-md ml-4">
        Draft
      </button>
    </div>
  );
}

export default Buttons;