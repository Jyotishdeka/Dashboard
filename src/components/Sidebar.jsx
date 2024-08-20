import React, { useState, useEffect } from "react";
import { useDashboardContext } from "../Context/DashboardContext";

const Sidebar = ({ isDrawerOpen, toggleDrawer, handleRemoveWidget }) => {
  const { state, dispatch } = useDashboardContext();
  const { categories } = state;

  const [selectedTab, setSelectedTab] = useState(categories[0]?.id);
  const [selectedWidgets, setSelectedWidgets] = useState({});

  useEffect(() => {
    const initialSelectedWidgets = {};
    categories.forEach((category) => {
      category.widgets.forEach((widget) => {
        initialSelectedWidgets[widget.id] = widget.checked || false;
      });
    });
    setSelectedWidgets(initialSelectedWidgets);
  }, [categories]);

  const handleCheckboxChange = (event, widgetId) => {
    const { checked } = event.target;
    const updatedWidgets = {
      ...selectedWidgets,
      [widgetId]: checked,
    };

    setSelectedWidgets(updatedWidgets);

    dispatch({
      type: "UPDATE_WIDGET_CHECKED_STATUS",
      payload: { categoryId: selectedTab, widgetId, checked },
    });
  };

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  const currentCategory = categories.find(
    (category) => category.id === selectedTab
  );

  return (
    <div>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
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
          <div className="flex space-x-4 px-4 py-2 border-b overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`${
                  selectedTab === category.id
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-gray-500"
                } whitespace-nowrap`}
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
                    onClick={() =>
                      handleRemoveWidget(currentCategory.id, widget.id)
                    }
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
          style={{ clipPath: "inset(0 0 0 0)" }}
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
