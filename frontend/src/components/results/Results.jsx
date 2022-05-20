import React from 'react'
import Core from '../core/Core';
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
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
import { TransitionProps } from '@mui/material/transitions';

export const Results = (props) => {
    const onDownload = () => {
        const link = document.createElement("a");
        link.download = `download.txt`;
        link.href = "./testingdownload/download.txt";
        link.click();
    };

    return (
        <>
            <Core button={props.button} text={"Results"} />
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}>
                <Button
                    variant="contained"
                    size="large"
                    onClick={onDownload}
                    startIcon={<GetAppIcon />}
                >
                    Download Sample Method File
                </Button>
            </Grid>
        </>
    )
}

export default Results;
