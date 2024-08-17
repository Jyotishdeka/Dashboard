import React, { useState } from "react";

const Sidebar = ({ isDrawerOpen, toggleDrawer }) => {
  const [selectedWidgets, setSelectedWidgets] = useState({
    cloudAccounts: true,
    cloudAccountRiskAssessment: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedWidgets((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-1/3 bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
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
            <button className="text-blue-800 border-b-2 border-blue-800">
              CSPM
            </button>
            <button className="text-gray-500">CWPP</button>
            <button className="text-gray-500">Image</button>
            <button className="text-gray-500">Ticket</button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <p className="text-gray-700 mb-4">
              Personalize your dashboard by adding the following widgets
            </p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="cloudAccounts"
                  className="form-checkbox"
                  checked={selectedWidgets.cloudAccounts}
                  onChange={handleCheckboxChange}
                />
                <span>Cloud Accounts</span>      <button className="text-red-700 underline">delete</button>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="cloudAccountRiskAssessment"
                  className="form-checkbox"
                  checked={selectedWidgets.cloudAccountRiskAssessment}
                  onChange={handleCheckboxChange}
                />
                <span>Cloud Account Risk Assessment</span>
                <button className="text-red-700 underline">delete</button>
              </label>
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
            <button onClick={toggleDrawer} className="px-4 py-2 bg-blue-800 text-white rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>

      {/* Blurred Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60"
          style={{ clipPath: "inset(0 33.33% 0 0)" }}
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
