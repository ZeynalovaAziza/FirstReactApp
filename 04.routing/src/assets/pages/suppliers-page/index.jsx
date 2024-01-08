import React, { useEffect, useState } from "react";
import SuppliersTable from "../../../components/suppliers-table";
import axios from "axios"
const SuppliersPage = () => {
    const [data, setData] = useState([])
  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    let response = await axios(`${BASE_URL}/suppliers`);
    // console.log(response.data);
    setData(response.data)
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>
    <SuppliersTable suppliers={data}/>
  </div>;
};

export default SuppliersPage;
