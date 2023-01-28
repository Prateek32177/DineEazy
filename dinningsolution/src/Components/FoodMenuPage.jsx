import React,{useState} from "react"
import BackButton from "./BackButton"
import SwipeableEdgeDrawer from "./Swipeabledrawer"
import FullWidthTabs from "./TabwithSwipws";
import SearchBar from "./SearchBar";
import menuBack from "../images/MenuBackground.png"
import SearchSection from "./SearchSection";

export default function FoodMenu(){

    const [search,setSearch] = useState("")
    const handleSearchInput = (input)=>(
        setSearch(input)
    )
    return(
        <> 
        <div style={{backgroundImage:`url(${menuBack})`,paddingBottom:"30px",backgroundSize:"cover",top:0,left:0,right:0,position:'fixed',zIndex:3}}>
        <BackButton pageName={"Food Menu"}/>
        <SearchBar callback={handleSearchInput}/>
        </div>
        {!search?<FullWidthTabs/>:<SearchSection/>}
        <SwipeableEdgeDrawer/>
        
        
        </>
    )
}