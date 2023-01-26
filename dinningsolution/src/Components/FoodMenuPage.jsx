import React from "react"
import BackButton from "./BackButton"
import SwipeableEdgeDrawer from "./Swipeabledrawer"
import FullWidthTabs from "./TabwithSwipws";
import SearchBar from "./SearchBar";
import menuBack from "../images/MenuBackground.png"
export default function FoodMenu(){
    return(
        <>
        <div style={{backgroundImage:`url(${menuBack})`,paddingBottom:"30px",backgroundSize:"cover"}}>
        <BackButton pageName={"Food Menu"}/>
        <SearchBar/>
        </div>
        <SwipeableEdgeDrawer/>
        <FullWidthTabs/>
        
        </>
    )
}