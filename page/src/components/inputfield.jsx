import { FaSearch, FaUser } from 'react-icons/fa'; // You can use any icon library, here we're using react-icons.


<div className="flex items-center border rounded-lg">
      {/* Icon at the front */}
      <div className="p-2">
        <FaSearch />
      </div>

      {/* Input field */}
      <input
        type="text"
        placeholder="Search..."
        className="p-2 pl-4 pr-12 w-full outline-none border-none"
      />

      {/* Icon at the back */}
      <div className="p-2">
        <FaUser />
      </div>
    </div>