import  React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {toggle,toggleColor} from "../ReduxStateManagement/MenuSlice"
import { useDispatch,useSelector } from 'react-redux';


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#FF5F00',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? ' #7C40FF' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));



export default function CustomizedSwitches() {
    const toggled = useSelector((state)=>state.Counter.themeToggle)
    const dispatch = useDispatch()
    const handleChange = (e,val)=>{
        val?dispatch(toggleColor("#FF5F00")):dispatch(toggleColor("#7C40FF"));
        dispatch(toggle(val));

    }
  return (
    <FormGroup >

      <FormControlLabel
      sx={{m:0,mr:1}}
        //  label="Switch Theme"
        value="theme"
        checked={toggled}
        onChange={handleChange}
        control={<IOSSwitch sx={{ m: 1 }}/>}
     
      />
    </FormGroup>
  );
}
