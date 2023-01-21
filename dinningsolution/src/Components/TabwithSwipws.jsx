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
    <Box sx={{marginBottom:"60px"}}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        //   scrollButtons="auto"
        //   variant="scrollable"
        aria-label="full width tabs example"
      >
        <StyledTab label="Starter" {...a11yProps(0)} />
        <StyledTab label="Chinese" {...a11yProps(1)} />
        <StyledTab label="Continential" {...a11yProps(2)} />
        <StyledTab label="Main Course" {...a11yProps(3)} />
        <StyledTab label="Beverages" {...a11yProps(4)} />
      </StyledTabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Menucards />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Menucards />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Menucards />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Menucards />
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Menucards />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
