import React from "react"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../App.css"
import {useDispatch} from "react-redux"
import {searchItems} from "../ReduxStateManagement/MenuSlice"
const iconStyle = {
    color: "#7C40FF",
    width: "25px",
    height: "25px",
    alignItems: "center",
    padding: "10px",
  };
  
export default function SearchBar(props){

    const dispatch = useDispatch()
 
    const {callback} = props

    const handleSearch=(e)=>{
        callback(e.target.value)
dispatch(searchItems(e.target.value))
    }
    return(
        <>
         <div className="App-header" >
        <div
          style={{
            width: "75vw",
            display: "flex",
            border: "1px solid grey",
            alignItems: "center",
            borderRadius: "10px"
          }}
        >
          <SearchOutlinedIcon style={iconStyle} />
          <input
            style={{
              width: "100%",
              paddingLeft: "10px",
              margin: "0px",
              border: "none",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.9)"
            }}
            placeholder="Find Your Food here"
            type="text"
            onChange={handleSearch}
            onFocus={handleSearch}
            // value={inp}
          ></input>
        </div>
        </div>
        </>
    )
}