import * as React from 'react';
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Core from '../core/Core';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
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
  const [userInput, setUserInput] = useState("");
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

  const handleGenerateBits = () => {
    simpleTagService.generateBits(userInput);
  };

  const handleClickOpen3 = () => {
    navigate('/profile');
  };

  const handleClickOpen4 = () => {
    navigate('/history');
  };

  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
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
            <img src={require("../../images/dna.jpg")}
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
            <img src={require("../../images/fingerprint.jpg")}
              alt='Generate2' width={'100%'}
              style={{ borderRadius: '5%', opacity: isShown2 ? 0.75 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen2} />
            <Dialog open={openDialog2} onClose={handleClose2} >
              <DialogTitle>{"Generation of a simple tag"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Do you wish to generate a simple tag?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2}>CANCEL</Button>
                <Link to="/history">
                  <Button onClick={handleSimpleTag}>CONFIRM</Button>
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
          <Typography variant="h3" style={{ textAlign: 'center' }}> Generate Bits </Typography>
          <div onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
          <img src={require("../../images/dna.jpg")}
              alt='Dna' width={'100%'}
              style={{ borderRadius: '5%', display: 'block', opacity: isShown3 ? 0.65 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen} />
            <Dialog open={openDialog} onClose={handleClose} onClick={() => { }}>
              <DialogTitle>Generator of Bits</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please insert a string of text or binary number to code into bits.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Secret input"
                  type="secret"
                  fullWidth
                  variant="standard"
                  value={userInput}
                  onChange={(value) => {{console.log("value", value); setUserInput(value.target.value)}}}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>CANCEL</Button>
                <Link to="/history">
                  <Button onClick={handleGenerateBits}>CONFIRM</Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </Box>

        {/* <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', flexDirection: 'column',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', m: 1,
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          <Typography variant="h3" style={{ textAlign: 'center' }}> Profile </Typography>
          <Link to="/history">
          <div onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
            <img src={require("../../images/profile.webp")}
              alt='Profile' style={{ borderRadius: '5%', display: 'block', opacity: isShown3 ? 0.65 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen3} />
          </div>
        </Box> */}

        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'stretch', flexDirection: 'column',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', m: 1,
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          <Typography variant="h3" style={{ textAlign: 'center' }}> History </Typography>
          <div onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>
            <img src={require("../../images/history.jpeg")}
              alt='History' style={{ borderRadius: '5%', display: 'block', opacity: isShown4 ? 0.65 : 1, width: '100%', height: '700px' }}
              onClick={handleClickOpen4} />
          </div>
        </Box>
      </Box>
    </div>
  );
}
