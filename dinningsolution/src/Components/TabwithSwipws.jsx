import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menucards from "./Menucards";
import { useSelector } from "react-redux";


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
        <Box sx={{ p: 3, marginTop: "2rem" }}>
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
    // 
    variant="scrollable"
    scrollButtons="auto"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    sx={{
      position: "fixed",
      width: "100vw",
      zIndex: "3",
      backgroundColor: "#1E2026",
      "& .MuiTabs-indicator": {
        display: "flex",
        justifyContent: "center",
        backgroundColor: props.toggled?"#FF5F00": "#7C40FF",
      },
      "& .MuiTabs-indicatorSpan": {
        width: "100%",
        backgroundColor:props.toggled?"#FF5F00": "#7C40FF",
      },
    }}
  />
))();

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
  const toggled = useSelector((state)=>state.Counter.themeToggle)
  const list = useSelector((state) => state.Counter.menuList);
  const tabDescp = useSelector((state)=>state.Counter.tabDescp)
  const [navbarShadow, setNavbarShadow] = useState("");

  const changeLogo = () => {
    if (window.scrollY >= 20) {
      setNavbarShadow("rgba(0, 0, 0, 0.35) 0px 5px 15px");
    } else {
      setNavbarShadow("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeLogo);
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ marginBottom: "60px", marginTop: "18rem" }}>
      <StyledTabs
      toggled={toggled}
        value={value}
        onChange={handleChange}
        textColor="inherit"
        //   scrollButtons="auto"
        //   variant="scrollable"
        style={{boxShadow: navbarShadow}} 
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
            {list.length!==0?list.map((detail) => (
              tab.label===detail.category&&<Menucards detail={detail} />
            )):<p className="billHeading" style={{color:"white",padding:"5rem"}} >"No Items Available"</p>}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}
