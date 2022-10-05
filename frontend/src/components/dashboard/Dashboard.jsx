import * as React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';
import Core from '../core/Core';
import BiotechSharpIcon from '@mui/icons-material/BiotechSharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import { styled, useTheme, alpha } from '@mui/material/styles';
import mainuserService from '../../services/mainuser.service';
import simpleTagService from '../../services/simpleTag.service';

export default function Dashboard(props, user) {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));

  const x = -50;
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const loadUsers = () => {
    mainuserService.getsecondUserList().then(
      (data) => {
        setUserList(data);
      }
    );
  };

  const handleClickOpen = () => {
    console.log("second user list get", userList);
    // console.log("second user list put", mainuserService.updateUser(user[1]));
    setOpenDialog(true);
  };

  const handleClose = () => {
    console.log('asd');
    setOpenDialog(false);
  };

  const handleClickOpen2 = () => {
    console.log('asd2 open');
    setOpenDialog2(true);
  };

  const handleClose2 = () => {
    console.log('asd2 close');
    setOpenDialog2(false);
  };

  const handleSimpleTag = () => {
    simpleTagService.generateTag();
  };

  const handleClickOpen3 = () => {
    navigate('/profile');
  };

  const handleClickOpen4 = () => {
    navigate('/history');
  };

  return (
    <div style={{maxWidth: '100vw', overflow: 'hidden'}}>
      <Core button={props.button} text={'Dashboard'} />
      <Box
        sx={{
          display: 'flex', justifyContent: 'space-around', p: 1, m: 1,
          borderRadius: 1, width: '100%',
          alignItems: 'center', flexWrap: 'wrap', backgroundSize: 'center'
        }}
      >
        {/* <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', m: 1, flexDirection: 'column',
            alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          <Typography variant="h3" style={{ textAlign: 'center' }}> Generate from Key</Typography>
          <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} >
            <img src='https://biocryptology.com/wp-content/uploads/2019/11/Untitled-1_0001_AdobeStock_275486156.jpg'
              alt='Generate1' width={'100%'}
              style={{ borderRadius: '5%', opacity: isShown ? 0.75 : 1, width: '100%', height: '100%' }}
              onClick={handleClickOpen} />
            <Dialog open={openDialog} onClose={handleClose} onClick={() => { }}>
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
                <Button onClick={handleClose}>Anuluj</Button>
                <Button onClick={handleClose}>Zatwierdź</Button>
              </DialogActions>
            </Dialog>
          </div>
        </Box> */}

        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', m: 1, flexDirection: 'column',
            alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          <Typography variant="h3" style={{ textAlign: 'center' }}> Generate Simple TAG </Typography>
          <div onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
            <img src='https://www.hermiston.or.us/sites/default/files/imageattachments/police/page/9351/fingerprint.jpg'
              alt='Generate2' width={'100%'}
              style={{ borderRadius: '5%', opacity: isShown2 ? 0.75 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen2} />
            <Dialog open={openDialog2} onClose={handleClose2} >
              <DialogTitle>{"Czy na pewno chcesz abyśmy wygenerowali tag?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Simple TAG: sekwencja DNA (500 nt - losowo) + dwa primery z zapamiętaną pozycją tych primerów -> pewna wartość * ()
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2}>NIE</Button>
                <Link to="/history">
                  <Button onClick={handleSimpleTag}>TAK</Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </Box>

        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', flexDirection: 'column',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', m: 1,
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          <Typography variant="h3" style={{ textAlign: 'center' }}> Profile </Typography>
          {/* <Link to="/history"> */}
          <div onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
            <img src='https://us.123rf.com/450wm/stunningart/stunningart1804/stunningart180400006/100107681-surreal-image-as-a-businessman-with-invisible-face-stand-with-crossed-hands-and-question-mark-insted.jpg?ver=6'
              alt='Profile' style={{ borderRadius: '5%', display: 'block', opacity: isShown3 ? 0.65 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen3} />
          </div>
        </Box>

        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', flexDirection: 'column',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', m: 1,
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          <Typography variant="h3" style={{ textAlign: 'center' }}> History </Typography>
          <div onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
            <img src='https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg'
              alt='History' style={{ borderRadius: '5%', display: 'block', opacity: isShown4 ? 0.65 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen4} />
          </div>
        </Box>
      </Box>
    </div>
  );
}
