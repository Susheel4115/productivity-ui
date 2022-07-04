import Filter from "../svg's/Filter";
import Plot from "react-plotly.js";

const Rectangle = () => {
  const data = [
    {
      marker: {
        color: "rgb(16, 32, 77)",
      },
      type: "scatter",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
    {
      name: "bar chart example",
      type: "bar",
      x: [1, 2, 3],
      y: [6, 2, 3],
    },
  ];
  const layout = {
    annotations: [
      {
        text: "",
        x: 0,
        xref: "paper",
        y: 0,
        yref: "paper",
      },
    ],
    title: "simple example",
    xaxis: {
      title: "time",
    },
  };

  return (
    <div>
      <div className="float-right m-5 mr-40 flex flex-row-reverse cursor-pointer -p-1 -mt-10">
        <h2 className="ml-2 font-semibold text-blue-600">Filter</h2>
        <Filter />
      </div>

      <div className="flex flex-row-revers justify-around flex-start">
        <div>
          <Plot data={data} layout={layout} className="w-1/2 h-1/8" />
        </div>

        <div className="grid grid-cols-4 gap-6 ml-40 -mr-40 w-1/2 h-1/2">
          <div className="bg-gray-100 p-5 pr-20 m-4 h-2 pb-10 mb-1 w-1 -pt-1 align-center">
            <h1 className="font-bold">240</h1>
          </div>
          <div className="bg-gray-100 p-5 pr-20 m-4 h-2 pb-10 w-1 -pt-1 align-center">
            <h1 className="font-bold">240</h1>
          </div>
          <div className="bg-gray-100 p-5 pr-20 m-4 h-2 pb-10 w-1 -pt-3 align-center">
            <h1 className="font-bold">240</h1>
          </div>
          <div className="bg-gray-100 p-5 pr-20 m-4 h-2 pb-10 w-1 -pt-3 align-center">
            <h1 className="font-bold">240</h1>
          </div>
          <div className="bg-gray-100 p-5 pr-20 m-4 h-2 pb-10 w-1 -pt-3 align-center">
            <h1 className="font-bold">240</h1>
          </div>
          <div className="bg-gray-100 p-5 pr-20 m-4 h-2 pb-10 w-1 -pt-3 align-center">
            <h1 className="font-bold">240</h1>
          </div>
          <div className="bg-gray-100 p-6 pr-20 m-4 h-2 pb-10 w-1 -pt-1 align-center">
            <h1 className="font-bold">240</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
