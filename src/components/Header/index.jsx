import React from "react";
import { Wrapper } from "./styles";
import Sidebar from "../Sidebar";
import Body from "../Body";

const Header = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Body />
    </Wrapper>
  );
};

export default Header;
