import React,{useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import OrderConfirm from "./Components/Pages/OrderReceived.jsx";
import Overlay from "./Components/Overlay.jsx";
import FoodMenu from "./Components/Pages/FoodMenuPage.jsx";
import HomePage from "./Components/Pages/HomePage.jsx";
import "./App.css";
import BillingPage from "./Components/Pages/BillingPage.jsx";
import {  doc, getDoc } from "firebase/firestore";
import { db } from "./Services/Firebase/FirebaseConfig.js";
import { useDispatch,useSelector } from "react-redux";
import { setMenuList,setTabDescp } from "./ReduxStateManagement/MenuSlice.js";
import Contact from "./Components/Pages/FooterLinkPages/Contact.jsx";
import About from "./Components/Pages/FooterLinkPages/AboutPage.jsx";
import PrivacyPolicy from "./Components/Pages/FooterLinkPages/PrivacyPolicy.jsx";
import MainHome from "./Components/MainHome.jsx";
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
  //uncomment below line when need data from database otherwise mockdata is enabled defaultly
  // readfirebase()
},[])
  return (
    <>
      <div className="App">
      <Overlay/>
        <Routes>
          <Route  path="/" element={<HomePage />}>
          <Route index element={<MainHome/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/privacypolicy" element={<PrivacyPolicy/>}></Route>
          </Route>
          <Route path="/Menu" element={<><FoodMenu /></>}></Route>
          <Route path="/orderConfirmed" element={<OrderConfirm />}></Route>
          <Route path="/Billing" element={<BillingPage/>}></Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
