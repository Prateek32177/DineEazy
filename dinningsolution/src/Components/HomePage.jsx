import React,{useEffect,useState} from "react"
import Logo from "./Logo"
import Sidenav from "./Sidenav"
import HeaderName from "./HeaderName"
import Footer from "./Footer"
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const iconStyle = {
    color: "white",
    width: "35px",
    height: "35px",
    alignItems: "center",
    padding:"15px",
    filter: "drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.4))",
    cursor:'pointer'
  };

export default function HomePage(){

    const [navbarShadow, setNavbarShadow] = useState("")
  
    const changeLogo = () => {
     
      if (window.scrollY >= 20) {
        setNavbarShadow("rgba(0, 0, 0, 0.45) 0px 25px 20px -20px")
      } else {
        setNavbarShadow("")
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", changeLogo)
  
    })

    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width:  '100vw',background:'transparent'}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
    return (
        <>
        <div style={{position:"fixed",width:"100%",zIndex:3,backgroundColor:"#1E2026",top:0,display:"flex",justifyContent:"space-between",alignItems:"center",boxShadow:navbarShadow }}>
        <Logo/>
        <MenuIcon onClick={toggleDrawer('right', true)} style={iconStyle}/>
          {/* <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer> */}
        </div>
       
        <Sidenav/>
        <HeaderName/>
        <Footer/>
        </>
    )
}

