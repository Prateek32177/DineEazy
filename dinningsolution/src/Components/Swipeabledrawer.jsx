import  React,{useState,useRef,useEffect} from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Chip from "@mui/material/Chip";
import Menucards from "./Menucards";
import QuantityCounter from "./Quantitybutton";
import { Navigate } from "react-router-dom";
import { arrow } from "../SVG's/svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
const iconStyle = {
    color: "grey",
    width: "25px",
    height: "25px",
    alignItems: "center",
    padding: "10px",
  };

const cardStyle = {
  textAlign: "center",
  color: "white",
  backgroundColor: "#1E2026",
  padding: "20px",
  borderRadius: "20px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
};

const drawerBleeding = 65;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  // boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
  backgroundColor: theme.palette.mode === "light" ? "#1E2026" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 15,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {


    const searchPos = useRef();
    console.log("searchPos",searchPos)
const navigate = useNavigate()

  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [nav,setNav] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  
  

  

console.log()
  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleConfirm = () => {
    setNav(true);
  };
  return (
    <>
<div className="App-header">
    <div onClick={()=>navigate(-1)} style={{  marginLeft:'3rem', display:"flex", alignSelf: "flex-start",cursor:'pointer'}}>
    <ArrowBackIcon style={{width:'23px',height:"23px",marginRight:'5px',  color: "grey"}}/><h6 style={{  color: "grey"}}>Back</h6>
    </div>
    
        {/* <input style={{backgroundColor:"transparent",color:"white"}} placeholder="Restaurant Name" type="text" onChange={handleChange} value={input}></input>
      <button onClick={addToFirebase}>Add Name</button> */}
        {/* <h5>Table No. - 3</h5> */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spaceBetween",
          }}
        >
          <h4>~ Menu ~</h4>
        </div>
        <div
          style={{
            width: "75vw",
            display: "flex",
            border: "1px solid grey",
            alignItems: "center",
            borderRadius: "10px",
          }}
id="searchbar"
          ref={searchPos}
        >
          <SearchOutlinedIcon style={iconStyle} />
          <input
            style={{
              width: "100%",
              backgroundColor: "transparent",
              padding: "0px",
              margin: "0px",
              border: "none",
              borderRadius: "10px",
            }}
            placeholder="Find Your Food here"
            type="text"
          ></input>
        </div>
      </div>
    <Root>
        {nav && <Navigate to="/orderConfirmed" replace={true} />}
        
      {/* <CssBaseline /> */}
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            borderRadius: "30px 30px 0px 0px",
          }}
        >
          <Puller />

          <Box
            sx={{
              textAlign: "center",
              p: 3,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "white", fontSize: "12px" }}>
              Swipe Up To Confirm Order
            </p>
            <Chip
              sx={{
                backgroundColor: "#7C40FF",
                color: "white",
                fontSize: "1rem",
              }}
              label="1 Item"
            />
          </Box>
        </StyledBox>
        <StyledBox
          sx={{
            pt: 3,
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
          }}
        >
          <div style={cardStyle}>
            
            <p>ITEM(S) ADDED</p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Burger</p>
              <QuantityCounter />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "15px 0px",
              }}
            >
              <p>Burger chicken tyikka mashala</p>
              <QuantityCounter />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "15px 0px",
              }}
            >
              <p>Burger</p>
              <QuantityCounter />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "15px 0px",
              }}
            >
              <p>Burger</p>
              <QuantityCounter />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: "15px 0px",
              }}
            >
              <p>Burger</p>
              <QuantityCounter />
            </div>
            <button
              onClick={handleConfirm}
              style={{
                backgroundColor: "#7C40FF",
                color: "white",
                boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
              }}
            >
              Confirm Order {arrow}
            </button>
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
    </>
  );
}

export default SwipeableEdgeDrawer;
