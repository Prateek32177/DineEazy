import "./App.css";
import React from "react";
import CustomizedSteppers from "./Components/Stepper";
import FullWidthTabs from "./Components/TabwithSwipws";
import HeaderName from "./Components/HeaderName";
import LabelBottomNavigation from "./Components/BottomNav";
function App() {
  return (
    <div className="App">
      <HeaderName />
      {/* <CustomizedSteppers /> */}
      <FullWidthTabs />
      {/* <LabelBottomNavigation /> */}
    </div>
  );
}

export default App;
