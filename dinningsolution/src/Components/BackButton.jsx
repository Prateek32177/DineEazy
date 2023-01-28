import React,{useState} from "react"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate,Navigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const iconStyle = {
    color: "white",
    width: "30px",
    height: "30px",
    alignItems: "center",
    padding:"15px",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))",
    cursor:'pointer'
  };


export default function BackButton(props){

    const {pageName,color} = props
    const [home,setHome] = useState(false);
    const navigate = useNavigate();
const[backPath,setBackPath] = useState(null)

const handleBack =()=>{
if(pageName==="Food Menu")
setBackPath("/")

 else if(pageName==="Order Tracking")
 {
setBackPath("/Menu")
 }
 else if(pageName==="Billing")
 {
    setBackPath("/orderConfirmed")
 }
 else
 setBackPath("/")
}
    const handleHome = ()=>{
setHome(true)
    }
    return(
        <>
          {backPath&&<Navigate to={backPath} replace={true}  />}
          {home && <Navigate to="/" replace={true} />}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
            onClick={handleBack}
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
          <HomeIcon onClick={handleHome} style={iconStyle}/>
        </div>
    
        </>
    )
}