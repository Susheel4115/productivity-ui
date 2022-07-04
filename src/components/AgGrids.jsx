import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useState, useRef, useEffect, useMemo, useCallback, memo } from "react";

//my component for displaying the maps.
const MyComp = (params) => {
  const renderCountRef = useRef(1);
  return (
    <>
      <b>({renderCountRef.current++})</b> {params.value}
    </>
  );
};

function AgGrid() {
  //async data fetching from api end point.

  // const gridRef = useRef();
  // const [rowData, setRowData] = useState();
  // const [columnDefs, setColumnDefs] = useState([
  //   { field: "Visit date" },
  //   { field: "Visit Status" },
  //   { field: "Billable" },
  //   { field: "Hrs" },
  //   { field: "Task" },
  //   { field: "Clinician" },
  //   { field: "Patient" },
  //   { field: "Zipcode" },
  //   { field: "Address" },
  // ]);
  // const defaultColDef = useMemo(
  //   () => ({
  //     sortable: true,
  //     filter: true,
  //     cellRenderer: memo(MyComp),
  //   }),
  //   []
  // );

  // useEffect(() => {
  //   fetch("http://localhost:5000/routes/api/data")
  //     .then((result) => result.json())
  //     .then((rowData) => setRowData(rowData));
  // }, []);

  const columnDefs = [
    { headerName: "Visit date", field: "date" },
    { headerName: "Visit Status", field: "status" },
    { headerName: "Billable", field: "billable" },
    { headerName: "Hrs", field: "Hours" },
    { headerName: "Task", field: "Task" },
    { headerName: "Clinician", field: "clinician" },
    { headerName: "Patient", field: "patient" },
    { headerName: "Zipcode", field: "zipcode" },
    { headerName: "Address", field: "address" },
    {
      headerName: "Action",
      field: "address",
      cellRendererFramework: (params) => (
        <div>
          <button
            onClick={() => MyComp(params)}
            className="border border-blue-400 rounded text-blue-600"
          >
            view on maps
          </button>
        </div>
      ),
    },
  ];
  const rowData = [
    {
      date: "2019-06-05",
      status: "Completed",
      billable: "no",
      Hours: 6,
      Task: "LVN/LPN Supervisory visit",
      clinician: "Martinez michelle",
      patient: "Martinez michelle",
      zipcode: 92126,
      address: "1901 Thrornridge Cir,Shilloh Hawaii",
    },
    {
      date: "2019-06-05",
      status: "Completed",
      billable: "no",
      Hours: 6,
      Task: "LVN/LPN Supervisory visit",
      clinician: "Martinez michelle",
      patient: "Martinez michelle",
      zipcode: 92126,
      address: "1901 Thrornridge Cir,Shilloh Hawaii",
    },
    {
      date: "2019-06-05",
      status: "Completed",
      billable: "no",
      Hours: 6,
      Task: "LVN/LPN Supervisory visit",
      clinician: "Martinez michelle",
      patient: "Martinez michelle",
      zipcode: 92126,
      address: "1901 Thrornridge Cir,Shilloh Hawaii",
    },
    {
      date: "2019-06-05",
      status: "Completed",
      billable: "no",
      Hours: 6,
      Task: "LVN/LPN Supervisory visit",
      clinician: "Martinez michelle",
      patient: "Martinez michelle",
      zipcode: 92126,
      address: "1901 Thrornridge Cir,Shilloh Hawaii",
    },
  ];

  return (
    <div className="mt-6">
      <div className="ag-theme-alpine" style={{ height: "200px" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={{ flex: 1 }}
        ></AgGridReact>
      </div>
    </div>
  );
}

export default AgGrid;
