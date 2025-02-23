import { useState, useEffect, useRef } from 'react';

const Popup = () => {
  const [selectedVehicles, setSelectedVehicles] = useState([3]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true); // State for sorting
  const [isOpen, setIsOpen] = useState(true); // Popup open state
  const popupRef = useRef(null); // Ref for the popup container

  const vehicles = [
    { id: 1, licensePlate: 'TN 38 EE 5555', image: 'https://artstreet.in/cdn/shop/products/915kqfXfUEL_512x512.jpg?v=1709200286' },
    { id: 2, licensePlate: 'TN 38 EE 5555', image: 'https://artstreet.in/cdn/shop/products/915kqfXfUEL_512x512.jpg?v=1709200286' },
    { id: 3, licensePlate: 'TN 38 EE 5555', image: 'https://artstreet.in/cdn/shop/products/915kqfXfUEL_512x512.jpg?v=1709200286' },
    { id: 4, licensePlate: 'TN 38 EE 5555', image: 'https://artstreet.in/cdn/shop/products/915kqfXfUEL_512x512.jpg?v=1709200286' },
    { id: 5, licensePlate: 'TN 38 EE 5555', image: 'https://artstreet.in/cdn/shop/products/915kqfXfUEL_512x512.jpg?v=1709200286' },
  ];

  // Click outside to close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false); // Close the popup if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleVehicleSelection = (vehicleId) => {
    if (selectedVehicles.includes(vehicleId)) {
      setSelectedVehicles(selectedVehicles.filter((id) => id !== vehicleId));
    } else {
      setSelectedVehicles([...selectedVehicles, vehicleId]);
    }
  };

  const deselectAll = () => {
    setSelectedVehicles([]);
  };

  const handleAssign = () => {
    console.log('Assigning vehicles:', selectedVehicles);
  };

  const sortVehicles = () => {
    setSortAscending(!sortAscending);
  };

  const filteredVehicles = vehicles
    .filter(vehicle => vehicle.licensePlate.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortAscending ? a.id - b.id : b.id - a.id);

  const selectedCount = selectedVehicles.length;

  return (
    isOpen && (
      <div className="fixed inset-0 bg-opacity-0 z-50 overflow-y-auto h-full w-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div ref={popupRef} className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">

          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Add Vehicle</h3>
            <button onClick={() => setIsOpen(false)} className="text-red-500 hover:text-red-700">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div className="flex space-x-2 mb-4">
            <div className="relative flex-grow">
              <input
                type="search"
                placeholder="Search"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
            <button onClick={sortVehicles} className="px-4 py-2 border rounded-md hover:bg-gray-100 flex items-center">
              <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
              </svg>
              Sort By Date
            </button>
          </div>

          <ul className="space-y-2 overflow-y-auto max-h-60">
            {filteredVehicles.map((vehicle) => (
              <li
                key={vehicle.id}
                className="flex items-center justify-between p-3 rounded-md bg-gray-50 hover:bg-gray-100"
              >
                <label className="flex items-center space-x-3 w-full">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="rounded text-green-500 focus:ring-green-500 h-4 w-4"
                      checked={selectedVehicles.includes(vehicle.id)}
                      onChange={() => toggleVehicleSelection(vehicle.id)}
                    />
                  </div>
                  <img src={vehicle.image} alt="Vehicle" className="w-8 h-8 rounded-full" />
                  <span>{vehicle.licensePlate}</span>
                </label>
                <span className="text-gray-500">0{vehicle.id}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex justify-between items-center">
            <button onClick={deselectAll} className="text-red-500 hover:text-red-700">
              Deselect All
            </button>
            <span className="text-gray-500">Selected {selectedCount}</span>
            <button
              onClick={handleAssign}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              disabled={selectedCount === 0}
            >
              Assign
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
