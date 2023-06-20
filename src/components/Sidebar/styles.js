import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/icons/rightArrow.svg";
import { ReactComponent as Home } from "../../assets/icons/main.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Exit } from "../../assets/icons/exit.svg";

const Wrapper = styled.div`
  width: 25%;
  height: auto;
  background-color: #0b3759;
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: 7px;
  p {
    margin-top: 5px;
    font-size: 14px;
  }
  span {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const Icons = styled.div``;
Icons.Arrow = styled(Arrow)`
  fill: #fff;
`;
Icons.Home = styled(Home)`
  width: 15px;
  height: 15px;
`;
Icons.Help = styled(Help)`
  width: 18px;
  height: 18px;
`;
Icons.Exit = styled(Exit)`
  width: 15px;
  height: 15px;
`;

const Bill = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-top: 25px;
  span {
    color: gray;
    font-size: 14px;
    display: block;
    margin-bottom: 6px;
  }
  p {
    font-size: 18px;
    font-weight: bold;
  }
  button {
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: blue;
    font-size: 18px;
  }
`;

const Ads = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-top: 25px;
  button {
    border-radius: 10px;
    width: 50%;
    border: 1px solid transparent;
    background-color: transparent;
    color: #fff;
    padding: 7px 5px;
    transition: all 0.3s linear;
    cursor: pointer;
  }
  :hover {
    background-color: blue;
    transition: all 0.3s linear;
  }
`;

const AddAds = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  background-color: blue;
  padding: 7px;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;

  span {
    font-weight: bold;
    font-size: 14px;
  }
  button {
    background-color: transparent;
    border: 1px solid transparent;
    font-weight: bold;
    cursor: pointer;
  }
`;

export { Wrapper, Profile, Icons, Bill, Ads, AddAds };
