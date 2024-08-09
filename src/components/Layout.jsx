// src/components/Layout.jsx
import {useState, React} from 'react';
import {
    Toolbar, 
    Typography, 
    Drawer, 
    List, 
    ListItem, 
    ListItemText, 
    CssBaseline, 
    Box,
    Container } 
from '@mui/material';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: drawerOpen ? '-500px' : '-800px', // Removes margin on the left
          marginTop: '50px',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
