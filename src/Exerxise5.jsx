import React from "react";
import { useState, useCallback } from "react";

const ExerciseFive = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Aman Chauhan",
      course: "BCA",
      contact: 9958955950,
      address: "Faridabad"
    },
    {
      id: 2,
      name: "Kunal Singhal",
      course: "BCA",
      contact: 99589732830,
      address: "Delhi"
    },
    {
      id: 3,
      name: "Deepak Giri",
      course: "B.Tech",
      contact: 78283637573,
      address: "Karnataka"
    },
    {
      id: 4,
      name: "Vishal Keshri",
      course: "BBA",
      contact: 99589727860,
      address: "Uttar Pradesh"
    },
    {
      id: 5,
      name: "Rakesh singh",
      course: "MBA",
      contact: 995367283330,
      address: "Jammu"
    }
  ]);

  const highlightRow = useCallback((id) => {
    setSelectedRow(id);
  });

  return (
    <>
      <h1>Exercise Five (Table) </h1>
      <table border="2" align="center" cellPadding="8">
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Contact No.</th>
          <th>Address</th>
        </tr>

        {tableData.map((data) => {
          return (
            <>
              <tr
                style={{
                  background: selectedRow === data.id ? "yellow" : "white"
                }}
                key={data.id}
                id={data.id}
                onClick={() => highlightRow(data.id)}
              >
                <td>{data.name}</td>
                <td>{data.course}</td>
                <td>{data.contact}</td>
                <td>{data.address}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};
export default ExerciseFive;
