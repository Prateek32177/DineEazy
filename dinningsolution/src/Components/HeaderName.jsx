import React,{useState,useEffect} from "react";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import "../App.css"
import {db} from "../Services/Firebase/FirebaseConfig"
import { curve } from "../SVG's/svg";
import Sidenav from "./Sidenav"
function HeaderName() {

const [name,setName] = useState("")
const [input,setInput] = useState("")
 function addToFirebase(e){
    console.log("checking...")
    try {
        const docRef =  addDoc(collection(db, "testing1"), {
         restaurantName:input
        });
 
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}

useEffect(()=>{
  readfirebase();
},[input])
function handleChange(e){
    setInput(e.target.value)
}
 function readfirebase(){  console.log("hello");
  getDocs(collection(db, "testing1")).then((querySnapshot)=>
  querySnapshot.forEach((doc) => {
    setName(doc.data().restaurantName)
  console.log("hello",`${doc.id} => ${doc.data().restaurantName}`);
}))


}
const[rend,setRend] = useState('block');
setTimeout(()=>setRend('none'),4000);
  const iconStyle = { color: "lime" };
  return (  
    <>
      <Sidenav/>
    <div className="backgroundImg">
    
      {curve}
    <h1 style={{ filter: "drop-shadow(2px 4px 6px grey)",padding:"30px",fontSize:"5rem"}}> Hard Rock Cafe and Restaurant</h1>
    {curve}
    <button style={{     borderColor:" #D1D9E6 !important",margin:"20px 0px",fontSize:"1.5rem",boxShadow: "3px 3px 6px rgb(155 157 168), -3px -3px 6px rgb(218 218 218)"}}>Menu</button>
    </div>
    <div className="App-header">
    
    {/* <div id="overlay" style={{display:`${rend}`}}>
    <div id="text"> Hello Army</div>
           </div> */}
      {/* <input style={{backgroundColor:"transparent",color:"white"}} placeholder="Restaurant Name" type="text" onChange={handleChange} value={input}></input>
      <button onClick={addToFirebase}>Add Name</button> */}
      <h5>Table No. - 3</h5>
      <h6>- Menu -</h6>
      {/* <div style={{display:"flex"}}>
      <input style={{backgroundColor:"transparent",color:"white"}} placeholder="Search Dish" type="text" onChange={handleChange} value={input}></input>
      <button onClick={addToFirebase}>Search</button>
      </div> */}
    </div>
    
    </>
  );
}

export default HeaderName;
