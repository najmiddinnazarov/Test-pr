import React, { useState } from "react";
import {
  Card,
  Cards,
  ChartSection,
  Icons,
  Left,
  TableSection,
  Top,
  Wrapper,
} from "./styles";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import LineChart from "./LineChart";
import { UserData } from "./Data";
import { Table } from "antd";

const Body = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [age2, setAge2] = React.useState("");

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const [userData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "green",
        borderWidth: 2,
      },
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "purple",
        borderWidth: 2,
      },
      {
        label: "Users Population",
        data: UserData.map((data) => data.userPopulation),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "yellow",
        borderWidth: 2,
      },
    ],
  });

  const columns = [
    {
      title: "Product Name",
      width: 60,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    {
      title: "Sum",
      width: 50,
      dataIndex: "sum",
      key: "sum",
      fixed: "left",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 60,
    },
    {
      title: "Clicklar soni",
      dataIndex: "click",
      key: "click",
      width: 50,
    },
    {
      title: "Ko'rilganlar soni",
      dataIndex: "seen",
      key: "seen",
      width: 60,
    },
    {
      title: "CTR",
      dataIndex: "ctr",
      key: "ctr",
      width: 50,
    },
    {
      title: "Sarflangan summa",
      dataIndex: "spend",
      key: "spend",
      width: 80,
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 60,
      render: () => <a href="/">action</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      key: i,
      name: `Iphone 14 Pro`,
      sum: `3000 UZS`,
      status: `${i % 2 === 0 ? "Aktiv" : "Aktiv emas"}`,
      click: 5000,
      seen: 8000,
      ctr: "87%",
      spend: "10000 UZS",
    });
  }

  return (
    <Wrapper>
      <Top>
        <Left>
          <span>Google Company</span>
          <h2>Najmiddin</h2>
        </Left>
        <div id="selectBtn">
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small-label">Result</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Result"
              onChange={handleChange}
            >
              <MenuItem value={"So'ngi 7 kunlik natija"}>
                "So'ngi 7 kunlik natija"
              </MenuItem>
              <MenuItem value={"So'ngi 14 kunlik natija"}>
                "So'ngi 14 kunlik natija"
              </MenuItem>
              <MenuItem value={"So'ngi 1 oylik natija"}>
                "So'ngi 1 oylik natija"
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-select-small-label">Product</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age2}
              label="Product"
              onChange={handleChange2}
            >
              <MenuItem value={"Barcha maxsulotlar"}>
                "Barcha maxsulotlar"
              </MenuItem>
              <MenuItem value={"Qolgan maxsulotlar"}>
                "Qolgan maxsulotlar"
              </MenuItem>
              <MenuItem value={"Oldingi maxsulotlar"}>
                "Oldingi maxsulotlar"
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </Top>
      <Cards>
        <Card>
          <span>{<Icons.Boy />}</span>
          <div>
            <h2>50098</h2>
            <p>Clicklar soni</p>
          </div>
        </Card>
        <Card>
          <span>{<Icons.Boy />}</span>
          <div>
            <h2>50098</h2>
            <p>Ko'rishlar soni</p>
          </div>
        </Card>
        <Card>
          <span>{<Icons.Boy />}</span>
          <div>
            <h2>50098</h2>
            <p>Ko'rganlar soni</p>
          </div>
        </Card>
        <Card>
          <span>{<Icons.Boy />}</span>
          <div>
            <h2>50098</h2>
            <p>CTR</p>
          </div>
        </Card>
        <Card>
          <span>{<Icons.Boy />}</span>
          <div>
            <h2>50098</h2>
            <p>Summa</p>
          </div>
        </Card>
      </Cards>
      <ChartSection>
        <div style={{ width: "100%" }}>
          <LineChart chartData={userData} />
        </div>
      </ChartSection>
      <TableSection>
        <h1>Mahsulotlar ro'yxati</h1>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1400,
            y: 300,
          }}
        />
      </TableSection>
    </Wrapper>
  );
};

export default Body;
