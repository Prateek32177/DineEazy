import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menucards from "./Menucards";
import img1 from "../images/food.png";
import img2 from "../images/hamburger.png";
import img3 from "../images/pizza.png";
import img4 from "../images/spaguetti.png";

const menuCard = [
  {
    itemName: "Burger",
    itemPrice: "299/-",
    img: img1,
  },
  {
    itemName: "Pizza",
    itemPrice: "399/-",
    img: img2,
  },
  {
    itemName: "Chole Bhature",
    itemPrice: "299/-",
    img: img3,
  },
  {
    itemName: "Pav Bhaji",
    itemPrice: "199/-",
    img: img4,
  },
];

const tabDescp = [
  {
    label: "Starter",
    MenuList: menuCard,
  },
  {
    label: "Chinese",
    MenuList: menuCard,
  },
  {
    label: "Continential",
    MenuList: menuCard,
  },
  {
    label: "Main Course",
    MenuList: menuCard,
  },
  {
    label: "Beverages",
    MenuList: menuCard,
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    variant="scrollable"
    scrollButtons="auto"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#7C40FF",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#7C40FF",
  },
});

const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(18),
  marginRight: theme.spacing(1),
  color: "grey ",
  opacity: 0.8,
  "&.Mui-selected": {
    color: "white",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "white",
  },
}));

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ marginBottom: "60px" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        //   scrollButtons="auto"
        //   variant="scrollable"
        aria-label="full width tabs example"
      >
        {tabDescp.map((tab, index) => (
          <StyledTab label={tab.label} {...a11yProps(index)} />
        ))}
      </StyledTabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabDescp.map((tab, index) => (
          <TabPanel value={value} index={index} dir={theme.direction}>
            <Menucards menuList={tab.MenuList} />
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}
