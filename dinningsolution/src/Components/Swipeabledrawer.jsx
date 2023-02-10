import React, { useState, useEffect } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Chip from "@mui/material/Chip";
import { Navigate } from "react-router-dom";
import { arrow } from "../SVG's/svg";
import AddedItemCard from "./AddedItemCard";
import "../App.css";
import { useSelector } from "react-redux";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../Services/Firebase/FirebaseConfig";
import { addedItemCardStyle } from "./StyleObject/Styles";
import readfirebase from "../Services/Utility/reduxstates";

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
  const toggled = useSelector((state) => state.Counter.themeToggle);
  const addedList = useSelector((state) => state.Counter.addedItems);
  const { window } = props;
  console.log("wqindows", props);
  const [open, setOpen] = React.useState(false);
  const [nav, setNav] = useState(false);

  const RestaurantDetails = collection(db, "Restaurants");

  function addToFirebase(e) {
    console.log("added items");
    readfirebase().then((detail) =>
      setDoc(doc(RestaurantDetails, "Hard Rock Cafe"), {
        ...detail,
        addedItemList: addedList,
      })
    );
  }

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleConfirm = () => {
    setNav(true);
    addToFirebase();
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
            keepMounted: addedList.length > 0 ? true : false,
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
                  backgroundColor: toggled ? "#FF5F00" : "#7C40FF",
                  color: "white",
                  fontSize: "1rem",
                }}
                label={`${addedList.length} Item`}
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
            <div style={addedItemCardStyle}>
              <p>ITEM(S) ADDED</p>
              <hr style={{ opacity: "0.5", width: "70%" }} />
              {addedList.length > 0
                ? addedList.map((item) => <AddedItemCard detail={item} />)
                : "No Items Added"}
              {addedList.length > 0 && (
                <button
                  onClick={handleConfirm}
                  style={{
                    backgroundColor: toggled ? "#FF5F00" : "#7C40FF",
                    color: "white",
                    boxShadow: "rgb(0 0 0 / 35%) 0px 5px 15px",
                  }}
                >
                  Confirm Order {arrow}
                </button>
              )}
            </div>
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </>
  );
}

export default SwipeableEdgeDrawer;
