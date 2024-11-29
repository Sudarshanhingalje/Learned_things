import React, { useEffect, useState } from 'react'


const App = () => {
  
  const[data,setData] = useState([])
  useEffect(()=>{
    fetch ("http://localhost:8081/access")
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  },[])
  
  return (
    <div style={{ alignItems: "center", maragin : "50px",padding: "50px",border:"10px solid green" }}>
      <table  border="1" cellPadding="20" cellSpacing="10">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.studentID}</td>
              <td>{d.firstName}</td>
              <td>{d.lastName}</td>
              <td>{d.date_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;