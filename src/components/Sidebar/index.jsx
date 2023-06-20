import React, { useState } from "react";
import "./styles.css";
import { AddAds, Ads, Bill, Icons, Profile, Wrapper } from "./styles";
import {
  Avatar,
  FormControl,
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Select,
  Typography,
} from "@mui/material";

const Sidebar = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Wrapper>
      <div>
        <Profile>
          <Avatar alt="Najmiddin" src="random.png" />
          <div>
            <h4>Najmiddin Nazarov</h4>
            <p>Google Company</p>
          </div>
          <span>{<Icons.Arrow />}</span>
        </Profile>
        <Bill>
          <div>
            <span>Sizning Xisobingiz</span>
            <p>10 000 000 UZS</p>
          </div>
          <button>+</button>
        </Bill>
        <Ads>
          <button>Reklama</button>
          <button>So'rovnoma</button>
        </Ads>
        <AddAds>
          <span>+</span>
          <button>Reklama qo'shish</button>
        </AddAds>
        <Paper sx={{ width: 230 }}>
          <MenuList>
            <MenuItem>
              <ListItemIcon>
                <Icons.Home />
              </ListItemIcon>
              <Typography variant="inherit">Asosiy</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Icons.Help />
              </ListItemIcon>
              <Typography variant="inherit">Yordam</Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Icons.Exit />
              </ListItemIcon>
              <Typography variant="inherit" noWrap>
                Akkountdan chiqish
              </Typography>
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
      <div id="language">
        <FormControl sx={{ minWidth: 130 }}>
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <p>Uzbek</p>
            </MenuItem>
            <MenuItem value={"Russian"}>Russian</MenuItem>
            <MenuItem value={"English"}>English</MenuItem>
          </Select>
        </FormControl>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
