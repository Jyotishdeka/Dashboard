import React, { useState } from 'react';

const Sidebar = ({ isDrawerOpen, toggleDrawer, categories, handleRemoveWidget }) => {
  const [selectedTab, setSelectedTab] = useState(categories[0]?.id); // Initialize with the first category ID
  const [selectedWidgets, setSelectedWidgets] = useState({});

  const handleCheckboxChange = (event, widgetId) => {
    const { checked } = event.target;
    setSelectedWidgets((prevState) => ({
      ...prevState,
      [widgetId]: checked,
    }));
  };

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  const currentCategory = categories.find((category) => category.id === selectedTab);

  return (
    <div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="p-4 bg-blue-800 text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-bold">Add Widget</h2>
              <button onClick={toggleDrawer} className="text-white">
                ✖
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-4 px-4 py-2 border-b">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`${
                  selectedTab === category.id
                    ? 'text-blue-800 border-b-2 border-blue-800'
                    : 'text-gray-500'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-gray-700 mb-4">
              Personalize your dashboard by adding the following widgets
            </p>
            <div className="space-y-2">
              {currentCategory?.widgets.map((widget) => (
                <label key={widget.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name={widget.id}
                    className="form-checkbox"
                    checked={!!selectedWidgets[widget.id]}
                    onChange={(e) => handleCheckboxChange(e, widget.id)}
                  />
                  <span>{widget.name}</span>
                  <button
                    onClick={() => handleRemoveWidget(currentCategory.id, widget.id)}
                    className="text-red-700 underline"
                  >
                    delete
                  </button>
                </label>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-4 p-4 border-t">
            <button
              onClick={toggleDrawer}
              className="px-4 py-2 bg-gray-200 text-gray-600 rounded"
            >
              Cancel
            </button>
            <button
              onClick={toggleDrawer}
              className="px-4 py-2 bg-blue-800 text-white rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Blurred Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60"
          style={{ clipPath: 'inset(0 33.33% 0 0)' }}
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
