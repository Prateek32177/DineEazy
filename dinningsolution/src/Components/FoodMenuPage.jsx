import React from "react"
import BackButton from "./BackButton"
import SwipeableEdgeDrawer from "./Swipeabledrawer"
import FullWidthTabs from "./TabwithSwipws";
import SearchBar from "./SearchBar";
export default function FoodMenu(){
    return(
        <>
        <BackButton pageName={"Food Menu"}/>
        <SearchBar/>
        <SwipeableEdgeDrawer/>
        <FullWidthTabs/>
        
        </>
    )
}