import React from "react";
import "./index.scss";

const SuppliersTable = ({ suppliers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {suppliers?.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.address.country}</td>
              <td>{item.address.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
