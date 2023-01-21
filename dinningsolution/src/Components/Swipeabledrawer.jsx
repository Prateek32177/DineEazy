import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Chip from '@mui/material/Chip';
import Menucards from './Menucards';
import QuantityCounter from './Quantitybutton';
const cardStyle = {
 textAlign:"center",
    color:"white",
    backgroundColor: "#1E2026",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
  };

const drawerBleeding = 65;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
// boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
  backgroundColor: theme.palette.mode === 'light' ? '#1E2026' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      {/* <CssBaseline /> */}
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
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
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,  
          }}
        >
          <Puller />
       
          <Box sx={{ textAlign: 'center', p: 3,display:"flex",justifyContent:"space-between" }}>
          <p style={{color:"white",fontSize:"12px"}}>Swipe Up To Check Added Items</p>
         <Chip sx={{backgroundColor:"#7C40FF",color:"white",fontSize:"1rem"}} label="1 Item" />
         
      </Box>
 
        </StyledBox>
        <StyledBox
          sx={{
            pt:3,
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset",
          }}
        >
            <div style={cardStyle}>
                <p>ITEM(S) ADDED</p>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                    <p>Burger</p>
                    <QuantityCounter/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 0px"}}>
                    <p>Burger chicken tyikka mashala</p>
                    <QuantityCounter/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 0px"}}>
                    <p>Burger</p>
                    <QuantityCounter/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 0px"}}>
                    <p>Burger</p>
                    <QuantityCounter/>
                </div>
                 <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"15px 0px"}}>
                    <p>Burger</p>
                    <QuantityCounter/>
                </div>
            <button>Confirm Order</button>
            </div>


        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}



export default SwipeableEdgeDrawer;