import React from "react"
import { Box } from "@mui/material"
import Menucards from "./Menucards"
import {useSelector} from "react-redux"
import "../App.css"
function SearchSection(){
const list = useSelector((state)=>state.Counter.menuList)

return (
    <>
    <Box sx={{ marginBottom: "60px", marginTop: "20rem" }}>
    {list.length>0?list.map((detail) => (
              <Menucards detail={detail} />
            )):<p className="billHeading" style={{color:"white",padding:"5rem"}} >"Dish Not Available"</p>
        }
    </Box>
    </>
)
}

export default SearchSection