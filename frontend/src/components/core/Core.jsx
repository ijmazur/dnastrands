import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import UserData from '../UserData';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import GetAppIcon from '@mui/icons-material/GetApp';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import { TransitionProps } from '@mui/material/transitions';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function PersistentDrawerRight(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);

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

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `download.txt`;
    link.href = "./testingdownload/download.txt";
    link.click();
  };

  const [spacing, setSpacing] = React.useState(2);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleClickOpen2 = () => {
    setOpenDialog2(true);
  };

  const handleClose2 = () => {
    setOpenDialog2(false);
  };

  const [valueTabs, setValueTabs] = React.useState(0);

  const handleChangeTabs = (event, newValueTabs) => {
    setValueTabs(newValueTabs);
  };

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <a href="/main">
            <img className='image' src={require("../../images/dnalogo.png")} width="150" height="75" alt="zamów jedzenie" />
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
          { /* SZUKAJKA
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="szukaj…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          {/* NOTYFIKACJE 
          <IconButton>
            <Badge badgeContent={4} color="warning">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
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
          <Divider />
          <ListItem button key={'Generuj'} component={Link} to="/main">
            <ListItemIcon>
              <BiotechSharpIcon />
            </ListItemIcon>
            <ListItemText primary={'Generuj'} />
          </ListItem>
          <Divider />
          <ListItem button key={'Moje dane'} component={Link} to="/profile">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={'Moje dane'} />
          </ListItem>
          <Divider />
          <ListItem button key={'Historia'} component={Link} to="/history">
            <ListItemIcon>
              <AccessTimeFilledIcon />
            </ListItemIcon>
            <ListItemText primary={'Historia'} />
          </ListItem>
          <Divider />
          <Button
            fullWidth
            variant="string"
            onClick={() => goToLogin('')}
          >
            <LogoutIcon></LogoutIcon>
            Wyloguj się
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