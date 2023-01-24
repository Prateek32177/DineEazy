import React from "react";
import { Routes, Route} from "react-router-dom";
import OrderConfirm from "./Components/OrderReceived.jsx";
import HeaderName from "./Components/HeaderName";
import Overlay from "./Components/Overlay.jsx";
import FoodMenu from "./Components/FoodMenuPage.jsx";
import "./App.css";

function App() {

  return (
    <>
      <div className="App">
      <Overlay/>
        <Routes>
          <Route path="/orderConfirmed" element={<OrderConfirm />}></Route>
          <Route index path="/" element={<HeaderName />}></Route>
          <Route path="/Menu" element={<><FoodMenu/></>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
