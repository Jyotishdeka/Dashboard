import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Widget = ({ widget }) => {
  // Ensure widget data is defined
  const widgetData = widget.widget.data || {
    labels: [1],
    datasets: { data: [], backgroundColor: [] },
  };

  const { labels, datasets } = widgetData;

  console.log(widget.widget.data);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-md font-medium mb-2">{widget.widget.name}</h2>
      {widget.widget.data ? (
        <div className="flex gap-7 items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="w-40 h-40">
              <Doughnut
                data={{
                  labels: labels,
                  datasets: [
                    {
                      data: datasets.data,
                      backgroundColor: datasets.backgroundColor,
                      hoverOffset: datasets.hoverOffset || 4,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false, // This hides the default legend
                    },
                  },
                }}
              />
            </div>
          </div>
          {/* Labels */}
          <div className="flex flex-col justify-center w-1/2">
            {labels.map((label, index) => (
              <div className="flex items-center mt-2" key={index}>
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: datasets.backgroundColor[index] }}
                ></div>
                <p className="text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-16 flex items-center justify-center h-full ">
          <p className="font-semibold text-2xl">{widget.widget.text}</p>
        </div>
      )}
    </div>
  );
};

export default Widget;
