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
import { useSelector } from "react-redux";
import {tabDescp} from "../ReduxStateManagement/MenuSlice"

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
    variant="scrollable"
    scrollButtons="auto"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    sx={{
      position: "fixed",
      width: "100vw",
      zIndex: "3",
      backgroundColor: "#1E2026",
    }}
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

  const list = useSelector((state) => state.Counter.menuList);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ marginBottom: "60px", marginTop: "18rem" }}>
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
            {list.map((detail) => (
              tab.label===detail.category&&<Menucards detail={detail} />
            ))}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Box>
  );
}
