import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import authService from '../../services/auth.service';
import UserData from '../UserData';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
import Core from '../core/Core';

export const MainUser = (props) => {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

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

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <Core text={"Dashboard"} />
      <DrawerHeader />
      <Grid align="center">
        {/* <TitlebarImageList /> */}
      </Grid>

      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={12}>

            <Grid key={"raz"} item>
              <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} component="div" align="center"  >
                <BiotechSharpIcon fontSize='medium' /> Generate #1
              </Typography>
              <Paper
                sx={{
                  height: 400,
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
              <Button variant="outlined" onClick={handleClickOpen}>Generuj ze słowa klucz</Button>
              <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Generator Primerów</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Proszę podać teskt z którego zostanie wygenerowany ciąg. Data TAG zapis sekwencji użytkownika: user podaje ciąg danych i kodujemy go na nici DNA () *
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Sekret"
                    type="sekret"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Link to="/results">
                    <Button onClick={handleClose}>Zatwierdź</Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid key={"dwa"} item>
              <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} component="div" align="center"  >
                <FingerprintIcon fontSize='medium' /> Generate #2
              </Typography>
              <Paper
                sx={{
                  height: 400,
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
              <Button variant="outlined" onClick={handleClickOpen2}>Generacja #2</Button>
              <Dialog
                open={openDialog2}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose2}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"Czy na pewno chcesz abyśmy wygenerowali tag?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                  Simple TAG: sekwencja DNA (500 nt - losowo) + dwa primery z zapamiętaną pozycją tych primerów -> pewna wartość * ()
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2}>NIE</Button>
                  <Link to="/results">
                    <Button onClick={handleClose2}>TAK</Button>
                  </Link>
                </DialogActions>
              </Dialog>
            </Grid>
            <Grid key={"trzy"} item>
              <Typography variant="h4" noWrap sx={{ flexGrow: 1 }} component="div" align="center"  >
                <HistorySharpIcon fontSize='medium' /> My history
              </Typography>
              <Paper
                sx={{
                  height: 400,
                  width: 300,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
              <Link to="/history">
                <IconButton color="primary" aria-label="check my history">
                  <HistorySharpIcon to="/history" />
                </IconButton>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )

  // return (
  //   <PersistentDrawerRight button={props.button} text={props.text} />
  // )
}

export default MainUser;