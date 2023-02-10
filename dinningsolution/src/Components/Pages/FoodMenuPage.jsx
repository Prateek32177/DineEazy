import React,{useState} from "react"
import BackButton from "../CommonComponent/BackButton"
import SwipeableEdgeDrawer from "../Swipeabledrawer"
import FullWidthTabs from "../TabwithSwipws";
import SearchBar from "../SearchBar";
import menuBack from "../../images/MenuBackground.png"
import SearchSection from "../SearchSection";


//   useEffect(()=>{
//     readfirebase();
//   },[input])
//   function handleChange(e){
//       setInput(e.target.value)
//   }
//    function readfirebase(){  console.log("hello");
//     getDocs(collection(db, "testing1")).then((querySnapshot)=>
//     querySnapshot.forEach((doc) => {
//       setName(doc.data().restaurantName)
//     console.log("hello",`${doc.id} => ${doc.data().restaurantName}`);
//   }))

//   }
export default function FoodMenu(){

    const [search,setSearch] = useState("")
    const handleSearchInput = (input)=>(
        setSearch(input)
    )
    return(
        <> 
        <div style={{backgroundImage:`url(${menuBack})`,backgroundColor:"rgb(30, 32, 38)",paddingBottom:"30px",backgroundSize:"cover",top:0,left:0,right:0,position:'fixed',zIndex:3}}>
        <BackButton pageName={"Food Menu"}/>
        <SearchBar callback={handleSearchInput}/>
        </div>
        {!search?<FullWidthTabs/>:<SearchSection/>}
        <SwipeableEdgeDrawer/>
        
        
        </>
    )
}