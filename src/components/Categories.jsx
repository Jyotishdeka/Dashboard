import React from "react";
import AddWidget from "./Addwidget";
import Widget from "./Widget";

const Categories = (props) => {
  // Function to show popup for adding widget
  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <div className="p-5">
      <h1 className="text-md font-semibold text-black mb-2">
        {props.data.name}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {props.data.widgets.map(
          (widget) =>
            widget.checked && ( // Only render the widget if it's checked
              <div key={widget.id}>
                <Widget widget={{ widget }} />
              </div>
            )
        )}
        {/* Empty Widget for "Add Widget" button */}
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center">
          <button
            className="text-blue-500 cursor-pointer border-2 border-gray-200 p-2 rounded-md hover:border-b-4 hover:border-b-blue-700"
            onClick={openModal}
          >
            + Add Widget
          </button>
        </div>
      </div>

      {/* Include the Modal */}
      <AddWidget modalId="my_modal_1" categoryId={props.data.id} />
    </div>
  );
};

export default Categories;
