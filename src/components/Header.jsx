import React, { useState } from 'react';
import { FiPlus, FiRefreshCw, FiMoreVertical, FiEye } from 'react-icons/fi';
import Sidebar from './Sidebar';
import { useDashboardContext } from '../Context/DashboardContext';

const Header = () => {
  const { state, dispatch } = useDashboardContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId } });
  };

  const updateWidgetCheckedStatus = (categoryId, widgetId, checked) => {
    dispatch({
      type: 'UPDATE_WIDGET_CHECKED_STATUS',
      payload: { categoryId, widgetId, checked },
    });
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-300 shadow-sm">
        <h1 className="text-lg text-black font-bold mb-2 sm:mb-0">CNAPP Dashboard</h1>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
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
      <Sidebar
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        categories={state.categories}
        handleRemoveWidget={handleRemoveWidget}
        updateWidgetCheckedStatus={updateWidgetCheckedStatus}
      />
    </div>
  );
};

export default Header;
