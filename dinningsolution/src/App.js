import "./App.css";
import React from "react";
import CustomizedSteppers from "./Components/Stepper";
import FullWidthTabs from "./Components/TabwithSwipws";
import HeaderName from "./Components/HeaderName";
import LabelBottomNavigation from "./Components/BottomNav";
import SwipeableEdgeDrawer from "./Components/Swipeabledrawer"
function App() {
  return (
    <div className="App">
      <HeaderName />
      {/* <CustomizedSteppers /> */}
      <FullWidthTabs />
      {/* <LabelBottomNavigation /> */}
      {/* <SwipeableEdgeDrawer/> */}
    </div>
  );
}

export default App;
