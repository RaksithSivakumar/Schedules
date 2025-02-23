import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

/* ------------------ MODAL ONE (Roles) ------------------ */
const ModalOne = ({ isOpen, onClose, onAddItems, existingItems }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [localItems, setLocalItems] = useState([]);

  // When modal opens, initialize localItems with existingItems
  useEffect(() => {
    if (isOpen) {
      console.log("ModalOne opened, existingItems:", existingItems);
      setLocalItems(existingItems || []);
      setSelectedOption("");
    }
  }, [isOpen, existingItems]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddItem = () => {
    if (selectedOption && !localItems.includes(selectedOption)) {
      const updatedItems = [...localItems, selectedOption];
      setLocalItems(updatedItems);
      console.log("ModalOne localItems after add:", updatedItems);
      setSelectedOption("");
    }
  };

  const handleRemoveItem = (item) => {
    const updatedItems = localItems.filter((i) => i !== item);
    setLocalItems(updatedItems);
    console.log("ModalOne localItems after remove:", updatedItems);
  };

  const handleSubmit = () => {
    console.log("ModalOne handleSubmit localItems:", localItems);
    onAddItems(localItems);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center mb-4">
          <span className="inline-block w-5 h-5 mr-2 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.485 1.565a.75.75 0 0 1 .02 1.06l-7.25 7.5a.75.75 0 0 1-1.08.02l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 6.72-6.94a.75.75 0 0 1 1.06-.05z" />
            </svg>
          </span>
          <h2 className="text-lg font-semibold text-gray-800">Add Role</h2>
        </div>
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Choose a role to add
          </label>
          <div className="flex gap-2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                eg: HOD
              </option>
              <option value="HOD">HOD</option>
              <option value="Dean">Dean</option>
              <option value="Professor">Professor</option>
              <option value="Staff">Staff</option>
            </select>
            <button
              onClick={handleAddItem}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add
            </button>
          </div>
          {localItems.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {localItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item)}
                    className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save Roles
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MODAL TWO (Facilities) ------------------ */
const ModalTwo = ({ isOpen, onClose, onAddItems, existingItems }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    if (isOpen) {
      console.log("ModalTwo opened, existingItems:", existingItems);
      setLocalItems(existingItems || []);
      setSelectedOption("");
    }
  }, [isOpen, existingItems]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddItem = () => {
    if (selectedOption && !localItems.includes(selectedOption)) {
      const updatedItems = [...localItems, selectedOption];
      setLocalItems(updatedItems);
      console.log("ModalTwo localItems after add:", updatedItems);
      setSelectedOption("");
    }
  };

  const handleRemoveItem = (item) => {
    const updatedItems = localItems.filter((i) => i !== item);
    setLocalItems(updatedItems);
    console.log("ModalTwo localItems after remove:", updatedItems);
  };

  const handleSubmit = () => {
    console.log("ModalTwo handleSubmit localItems:", localItems);
    onAddItems(localItems);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex items-center mb-4">
          <span className="inline-block w-5 h-5 mr-2 text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.485 1.565a.75.75 0 0 1 .02 1.06l-7.25 7.5a.75.75 0 0 1-1.08.02l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 6.72-6.94a.75.75 0 0 1 1.06-.05z"/>
            </svg>
          </span>
          <h2 className="text-lg font-semibold text-gray-800">Add Facility</h2>
        </div>
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Choose a facility to add
          </label>
          <div className="flex gap-2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                eg: projector
              </option>
              <option value="Projector">Projector</option>
              <option value="Speaker">Speaker</option>
              <option value="Mic">Mic</option>
              <option value="White Board">White Board</option>
            </select>
            <button
              onClick={handleAddItem}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add
            </button>
          </div>
          {localItems.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {localItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item)}
                    className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save Facilities
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MODAL THREE (Facilities To Be Added) ------------------ */
const ModalThree = ({ isOpen, onClose, onAddItems, existingItems }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    if (isOpen) {
      console.log("ModalThree opened, existingItems:", existingItems);
      setLocalItems(existingItems || []);
      setSelectedOption("");
    }
  }, [isOpen, existingItems]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddItem = () => {
    if (selectedOption && !localItems.includes(selectedOption)) {
      const updatedItems = [...localItems, selectedOption];
      setLocalItems(updatedItems);
      console.log("ModalThree localItems after add:", updatedItems);
      setSelectedOption("");
    }
  };

  const handleRemoveItem = (item) => {
    const updatedItems = localItems.filter((i) => i !== item);
    setLocalItems(updatedItems);
    console.log("ModalThree localItems after remove:", updatedItems);
  };

  const handleSubmit = () => {
    console.log("ModalThree handleSubmit localItems:", localItems);
    onAddItems(localItems);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add Facility To Be Added</h2>
        <div className="space-y-4">
          <label className="block text-gray-700 font-medium">
            Choose a facility to add
          </label>
          <div className="flex gap-2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                eg: table
              </option>
              <option value="Table">Table</option>
              <option value="Chairs">Chairs</option>
              <option value="Guest Chair">Guest Chair</option>
              <option value="Charging Ports">Charging Ports</option>
            </select>
            <button
              onClick={handleAddItem}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Add
            </button>
          </div>
          {localItems.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {localItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full"
                >
                  {item}
                  <button
                    type="button"
                    onClick={() => handleRemoveItem(item)}
                    className="ml-2 text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save Facility
          </button>
        </div>
      </div>
    </div>
  );
};

/* ------------------ MAIN PAGE ------------------ */
const FacilitiesPage = () => {
  // Modal control
  const [modalType, setModalType] = useState(null);
  // Parent state for each section
  const [roles, setRoles] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [facilitiesToBeAdded, setFacilitiesToBeAdded] = useState([]);

  const openModal = (type) => {
    console.log("Opening modal:", type);
    setModalType(type);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setModalType(null);
  };

  // Debug logs to confirm state updates
  console.log("Parent roles:", roles);
  console.log("Parent facilities:", facilities);
  console.log("Parent facilitiesToBeAdded:", facilitiesToBeAdded);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md shadow flex flex-col gap-10">
        {/* SECTION 1: Roles */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Roles who can use the venue
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full"
              >
                {role}
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:text-red-600"
                  onClick={() => {
                    const updatedRoles = roles.filter((r) => r !== role);
                    console.log("Removing role, updated roles:", updatedRoles);
                    setRoles(updatedRoles);
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => openModal("section1")}
            className="border border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Add role
          </button>
        </div>

        {/* SECTION 2: Facilities */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Facilities
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full"
              >
                {fac}
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:text-red-600"
                  onClick={() => {
                    const updatedFacilities = facilities.filter((f) => f !== fac);
                    console.log("Removing facility, updated facilities:", updatedFacilities);
                    setFacilities(updatedFacilities);
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => openModal("section2")}
            className="border border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Add facility
          </button>
        </div>

        {/* SECTION 3: Facilities to be added */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Facilities to be added
          </h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {facilitiesToBeAdded.map((fac, idx) => (
              <div
                key={idx}
                className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full"
              >
                {fac}
                <button
                  type="button"
                  className="ml-2 text-red-500 hover:text-red-600"
                  onClick={() => {
                    const updatedToBeAdded = facilitiesToBeAdded.filter((f) => f !== fac);
                    console.log("Removing facility to be added, updated:", updatedToBeAdded);
                    setFacilitiesToBeAdded(updatedToBeAdded);
                  }}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => openModal("section3")}
            className="border border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Add facility to be added
          </button>
        </div>
      </div>

      {/* Render modals conditionally */}
      <ModalOne
        isOpen={modalType === "section1"}
        onClose={closeModal}
        onAddItems={(items) => {
          console.log("ModalOne returning items:", items);
          setRoles(items);
        }}
        existingItems={roles}
      />
      <ModalTwo
        isOpen={modalType === "section2"}
        onClose={closeModal}
        onAddItems={(items) => {
          console.log("ModalTwo returning items:", items);
          setFacilities(items);
        }}
        existingItems={facilities}
      />
      <ModalThree
        isOpen={modalType === "section3"}
        onClose={closeModal}
        onAddItems={(items) => {
          console.log("ModalThree returning items:", items);
          setFacilitiesToBeAdded(items);
        }}
        existingItems={facilitiesToBeAdded}
      />
    </div>
  );
};

export default FacilitiesPage;
