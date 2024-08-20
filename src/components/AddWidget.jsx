import React, { useState } from "react";
import { useDashboardContext } from "../Context/DashboardContext";
import { v4 as uuidv4 } from "uuid";

const AddWidget = ({ modalId = "my_modal_1", categoryId }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [checked, setChecked] = useState(true); 
  const { dispatch } = useDashboardContext();

 

  const handleAddWidget = () => {
    const newWidget = {
      id: uuidv4(),
      name: widgetName,
      text: widgetText,
      checked: checked, 
    };

    dispatch({
      type: "ADD_WIDGET",
      payload: { categoryId, widget: newWidget },
    });

    alert("Added successfully");
    setWidgetName("");
    setWidgetText("");
    setChecked(true); // Reset to the initial state if needed
  };

  return (
    <dialog id={modalId} className="modal">
      <div className="modal-box bg-slate-300 text-black">
        <h3 className="font-bold text-md text-center">Add New Widget</h3>
        <div className="flex items-center justify-center flex-col gap-6 mt-6">
          <div>
            <input
              type="text"
              placeholder="Widget Name"
              className="input input-bordered w-full max-w-xs bg-transparent"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Widget Text"
              className="input input-bordered w-full max-w-xs bg-transparent"
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
            />
          </div>
          <div>
            {/* <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
              <span>Checked</span>
            </label> */}
          </div>
          <form method="dialog">
            <button className="btn btn-primary w-75" onClick={handleAddWidget}>
              Add Widget
            </button>
          </form>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-error">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddWidget;
