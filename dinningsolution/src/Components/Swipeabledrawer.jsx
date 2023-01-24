import React, { useState } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Chip from "@mui/material/Chip";
import { Navigate } from "react-router-dom";
import { arrow } from "../SVG's/svg";
import AddedItemCard from "./AddedItemCard"
import "../App.css"

const addedItemList=[
    {
        label:'Pizza',
        Quantity:'2'
    },
    {
        label:'Burger',
        Quantity:'2'
    },
    {
        label:'Fried Rice',
        Quantity:'2'
    },
    {
        label:'Chill Paneer',
        Quantity:'2'
    },
    {
        label:'Pasta Italiano',
        Quantity:'2'
    }
]
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

  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const [nav, setNav] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleConfirm = () => {
    setNav(true);
  };
  return (
    <>
      <Root>
        {nav && <Navigate to="/orderConfirmed" replace={true} />}
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
              <hr style={{opacity:'0.5',width:"70%"}}/>
              {addedItemList.map(
                (item)=>(
                    <AddedItemCard itemName={item.label}/>
                )
              )}
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
