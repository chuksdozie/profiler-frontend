import React from "react";
import { COLORS } from "../utils/Colors";
import SearchDashboardHead from "../components/organisms/SearchDashboardHead";
import StickyHeadTable from "../components/molecules/Table";

const info = [
  { name: 1, bitch: 2 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
];

const list = [];
for (let i = 0; i < info.length; i++) {
  const data = { name: info[i].name };
  list.push(data);
}
console.log(list);

const tableColumns = [
  {
    id: "image",
    label: "",
    minWidth: 50,
    align: "center",
    format: "image",
  },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "",
    minWidth: 50,
    align: "center",
    format: "action",
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const tableRows = [
  createData("Indi", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const Department = () => {
  return (
    <div style={MainDiv}>
      <SearchDashboardHead />
      <div style={TableDiv}>
        <StickyHeadTable columns={tableColumns} rows={tableRows} />
      </div>
    </div>
  );
};

export default Department;

const MainDiv = {
  width: "100%",
  //   backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
  borderRadius: "0px",
};

const TableDiv = {
  width: "95%",
  margin: "10px 0",
  //   backgroundColor: "red",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: "10px 0",
  //   borderRadius: "0px",
};
