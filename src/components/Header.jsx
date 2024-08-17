import React, { useState } from 'react';
import { FiPlus, FiRefreshCw, FiMoreVertical, FiEye } from 'react-icons/fi';
import Sidebar from './Sidebar';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-slate-300 shadow-sm">
        <h1 className="text-lg text-black font-bold">CNAPP Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDrawer}
            className="flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded"
          >
            Add Widget/Remove <FiPlus className="ml-2" />
          </button>
          <button className="p-2 text-gray-600 bg-gray-100 border border-gray-300 rounded">
            <FiRefreshCw />
          </button>
          <button className="p-2 text-gray-600 bg-gray-100 border border-gray-300 rounded">
            <FiMoreVertical />
          </button>
          <button className="flex items-center px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded">
            <FiEye className="mr-2" /> Last 2 days
          </button>
        </div>
      </div>

      {/* Drawer */}
      <Sidebar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Header;
