import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as Boy } from "../../assets/icons/boy.svg";

const Wrapper = styled.div`
  width: 80%;
  padding: 25px 20px;
  background-color: #f8fafc;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  span {
    color: gray;
    font-size: 14px;
    display: block;
    margin-bottom: 3px;
  }
`;

const Icons = styled.div``;
Icons.Arrow = styled(Arrow)``;
Icons.Boy = styled(Boy)`
  width: 50px;
  height: 50px;
`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;
  gap: 15px;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border-radius: 7px;
  padding: 10px 15px;
  width: 180px;
  h2 {
    color: #333;
    font-size: 18px;
    margin-bottom: 3px;
  }
  p {
    color: gray;
    font-size: 14px;
  }
`;

const ChartSection = styled.div`
  margin-top: 15px;
`;

const TableSection = styled.div`
  margin-top: 25px;
`;

export { Wrapper, Top, Left, Icons, Cards, Card, ChartSection, TableSection };
