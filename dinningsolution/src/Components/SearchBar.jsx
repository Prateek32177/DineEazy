import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { searchItems } from "../ReduxStateManagement/MenuSlice";
import { searchIconStyle } from "./StyleObject/Styles";

export default function SearchBar(props) {
  
  const toggled = useSelector((state) => state.Counter.themeToggle);
  const dispatch = useDispatch();
  const { callback } = props;

  const handleSearch = (e) => {
    callback(e.target.value);
    dispatch(searchItems(e.target.value));
  };
  return (
    <>
      <div className="App-header">
        <div
          style={{
            width: "75vw",
            display: "flex",
            border: "1px solid grey",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <SearchOutlinedIcon
            style={{
              ...searchIconStyle,
              color: toggled ? "#FF5F00" : "#7C40FF",
            }}
          />
          <input
            style={{
              width: "100%",
              paddingLeft: "10px",
              margin: "0px",
              border: "none",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.9)",
            }}
            placeholder="Find Your Food here"
            type="search"
            onChange={handleSearch}
          ></input>
        </div>
      </div>
    </>
  );
}
