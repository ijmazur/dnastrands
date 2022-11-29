import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import UserData from '../UserData';
import { styled, useTheme, alpha } from '@mui/material/styles';
import { Box, Drawer, CssBaseline, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Button, Grid } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LogoutIcon from '@mui/icons-material/Logout';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';


const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function PersistentDrawerRight(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = useState();
  const navigate = useNavigate();
  const goToLogin = (goToPage) => {
    navigate('/', { state: { data: goToPage } });
  }

  useEffect(() => {
    authService.getCurrentUser().then(
      (data) => {
        setUserData(data);
      }
    )
  }, [])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <a href="/main">
            <img className='image' src={require("../../images/dnalogo.png")} width="100px" height="75px" alt=" " />
          </a>
          {props.button}
          {/* <Tabs
            value={valueTabs}
            onChange={handleChangeTabs}
            textColor="info"
            indicatorColor="secondary"
            aria-label="icon position tabs example"
          >
            <Tab icon={<HomeIcon />} label="Home" component={Link} to="/main" />
            <Tab icon={<BiotechSharpIcon />} label="Generate TAG"  component={Link} to="/results"/>
            <Tab icon={<FingerprintIcon />} label="Generate S-TAG"  component={Link} to="/results"/>
            <Tab icon={<HistorySharpIcon />} label="History" component={Link} to="/history" />
          </Tabs> */}
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div" />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} component="div" align="center"  >
          <FingerprintIcon fontSize='medium' /> {props.text}
        </Typography>
        <Grid align="center">
          {/* <TitlebarImageList /> */}
        </Grid>
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <UserData userData={userData} />
        </DrawerHeader>
        <List>
          <Divider />
          <ListItem button key={'Generate TAG'} component={Link} to="/main">
            <ListItemIcon>
              <BiotechSharpIcon />
            </ListItemIcon>
            <ListItemText primary={'Generate TAG'} />
          </ListItem>
          <Divider />
            <ListItem button key={'Generate BIT'} component={Link} to="/main">
              <ListItemIcon>
                <FingerprintIcon />
              </ListItemIcon>
              <ListItemText primary={'Generate BIT'} />
            </ListItem>
          <Divider />
          <ListItem button key={'Profile'} component={Link} to="/profile">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={'Profile'} />
          </ListItem>
          <Divider />
          <ListItem button key={'History'} component={Link} to="/history">
            <ListItemIcon>
              <AccessTimeFilledIcon />
            </ListItemIcon>
            <ListItemText primary={'History'} />
          </ListItem>
          <Divider />
          <Button
            fullWidth
            variant="string"
            onClick={() => goToLogin('')}
          >
            <LogoutIcon></LogoutIcon>
            Log Out
          </Button>
        </List>
      </Drawer>
    </Box>
  );
}

export const Core = (props) => {
  return (
    <PersistentDrawerRight button={props.button} text={props.text} />
  )
}

export default Core;