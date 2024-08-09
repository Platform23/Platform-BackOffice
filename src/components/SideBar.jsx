import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { 
  Box, 
  Drawer as MuiDrawer, 
  List, 
  Divider, 
  IconButton, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from '@mui/material';
import { 
  ChevronLeft as ChevronLeftIcon, 
  ChevronRight as ChevronRightIcon, 
  GridView as GridViewIcon, 
  People as PeopleIcon, 
  Topic as TopicIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const drawerWidth = 200;

const icons = [
  <PeopleIcon />,
  <TopicIcon />,
  // <GridViewIcon />,
];

const routes = [
  '/users',
  '/networks',
  // '/dashboard',
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideBar = ({open, setOpen}) => {

    const theme = useTheme();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return(
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>

            </DrawerHeader>
            
            <Divider />

            <List>
                {['Utilisateurs', 'Reseaux'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                          component={Link}
                          to={routes[index]}
                          sx={{
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5,
                          }}
                        >

                        <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                            color: '#25434d'
                        }}
                        >
                          {icons[index]}
                        </ListItemIcon>

                        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: '#25434d' }} />
                      </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider />
        </Drawer>
      </Box>
        
    )
}

export default SideBar