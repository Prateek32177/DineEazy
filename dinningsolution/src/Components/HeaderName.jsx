import React,{useState} from "react";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import "../App.css"
import {db} from "../Services/Firebase/FirebaseConfig"
import { svg1,svg2,svg3,svg4,svg5,svg6 } from "../SVG's/svg";

function HeaderName() {

const [name,setName] = useState("Restaurant")
const [input,setInput] = useState("")
 function addToFirebase(e){
    console.log("checking...")
    try {
        const docRef =  addDoc(collection(db, "cafe"), {
         restaurantName:e.target.value
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}
function handleChange(e){
    setInput(e.target.value)
}
 function readfirebase(){  console.log("hello");
  getDocs(collection(db, "restaurant")).then((querySnapshot)=>
  querySnapshot.forEach((doc) => {
    setName(doc.data().restaurantName)
  console.log("hello",`${doc.id} => ${doc.data()}`);
}))


}

  const iconStyle = { color: "lime" };
  return (
    <div className="App-header">
      <h1 style={{ filter: "drop-shadow(2px 4px 6px black)",padding:"30px"}}>{name} </h1>
      <h5>Table No. - 3</h5>
      <h6>- Menu -</h6>
    </div>
  );
}

export default HeaderName;
