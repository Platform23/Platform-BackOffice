// src/components/Layout.jsx
import React from 'react';
import {
    CssBaseline, 
    Box, } 
from '@mui/material';
import NavBar from './NavBar';


const Layout = ({ children }) => {

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
          marginLeft:'-700px',
          marginTop: '50px',
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
