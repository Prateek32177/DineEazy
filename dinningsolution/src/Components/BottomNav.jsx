import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import Paper from '@mui/material/Paper';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0,padding:"10px",backgroundColor:"#1E2026",borderRadius:"40px 40px 0px 0px",boxShadow: "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset"}} elevation={3}>
<button>order Now</button>

    </Paper>
  );
}