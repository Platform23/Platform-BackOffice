import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Box, Toolbar, Button, IconButton, Typography} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import AuthContext from './hooks/AuthProvider';
import { API_BASE_URL } from '../utils/Constant';

const drawerWidth = 230;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: '#25434d',
}));

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  const handleLogout = async () => {
    try {
        await logout();
        navigate("/");
    } catch (responseError) {
        setError(responseError)
    }
}

if (!user) {
    return null;
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold'}}>
            Platform - Tableau de bord
          </Typography>
          <Button 
            onClick={handleLogout}
            variant='text'
            color="inherit"
            // component={Link}
            // to="/"
            sx={{fontWeight: 'bold'}}
          >
              Deconnexion
          </Button>
        </Toolbar>
      </AppBar>
      <SideBar open={open} setOpen={setOpen}/>
    </Box>
  );
}
