import React from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

export default function BackButton(props){

    const {pageName,color} = props
    const navigate = useNavigate();
    return(
        <>
         <div
          style={{
            padding: "2rem 2rem",
            display: "flex",
            alignItems: "center",
            color: "white",
            alignSelf: "flex-start",
          }}
        >
          <ArrowBackIosIcon
            onClick={() => navigate(-1)}
            style={{
              cursor: "pointer",
              width: "25px",
              height: "25px",
              marginRight: "2px",
              color:"white"
            }}
          />
          <h5 style={{ margin: 0, padding: 0 }}>{pageName}</h5>
        </div>
        </>
    )
}