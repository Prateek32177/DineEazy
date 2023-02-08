import React,{useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import OrderConfirm from "./Components/OrderReceived.jsx";
import HeaderName from "./Components/HeaderName";
import Overlay from "./Components/Overlay.jsx";
import FoodMenu from "./Components/FoodMenuPage.jsx";
import HomePage from "./Components/HomePage.jsx";
import "./App.css";
import BillingPage from "./Components/BillingPage.jsx";
import {  doc, getDoc } from "firebase/firestore";
import { db } from "./Services/Firebase/FirebaseConfig.js";
import { useDispatch,useSelector } from "react-redux";
import { setMenuList,setTabDescp } from "./ReduxStateManagement/MenuSlice.js";

function App() {

  const docRef = doc(db, "Restaurants", "Hard Rock Cafe");
const dispatch = useDispatch()
async function readfirebase(){  

const docSnap =  await getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  dispatch(setMenuList(docSnap.data().menu))
  dispatch(setTabDescp(docSnap.data().menuCategories))

} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
}

useEffect(()=>{
  // readfirebase()
},[])
  return (
    <>
      <div className="App">
      <Overlay/>
        <Routes>
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/Menu" element={<><FoodMenu /></>}></Route>
          <Route path="/orderConfirmed" element={<OrderConfirm />}></Route>
          <Route path="/Billing" element={<BillingPage/>}></Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
