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
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDialog2, setOpenDialog2] = React.useState(false);

  const [userList, setUserList] = useState([]);
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
    setOpenDialog(false);
  };

  const handleClickOpen2 = () => {
    setOpenDialog2(true);
  };

  const handleClose2 = () => {
    setOpenDialog2(false);
  };

  const handleSimpleTag = () => {
    simpleTagService.generateTag();
  };

  return (
    <>
    <Core button={props.button} text={'Dashboard'} />
      {/* <ImageList sx={{ width: 'auto', height: 'auto'}} cols={3} rowHeight='auto'>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`} 
                                >
                                    <BiotechSharpIcon fontSize='medium' />
                                </IconButton>
                            }
                            sx={{textAlign: 'center'}}
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}
      <Box
        sx={{
          display: 'flex', justifyContent: 'space-around', p: 1, m: 1,
          borderRadius: 1, width: '100%',
          alignItems: 'center', flexWrap: 'wrap', backgroundSize: 'center'
        }}
      >
        <Box sx={{
          display: 'flex', justifyContent: 'space-around', width: '100%'
        }}>
          <Typography variant="h2" > Generate </Typography>
          <Typography variant="h2" > Generate 2 </Typography>
          <Typography variant="h2" > Profile </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', m: 1,
            alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            width: '500px', height: '700px', borderRadius: '5%',
          }}
          onClick={handleClickOpen}>
          <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
            <img src='https://biocryptology.com/wp-content/uploads/2019/11/Untitled-1_0001_AdobeStock_275486156.jpg'
              alt='Generate1' width={'100%'}
              style={{ borderRadius: '5%', opacity: isShown ? 0.75 : 1, width: '100%', height: '100%' }} />
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
                <Button onClick={handleClose}>Anuluj</Button>
                <Link to="/results">
                  <Button onClick={handleClose}>Zatwierdź</Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </Box>

        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', m: 1,
            alignItems: 'stretch', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
            width: '500px', height: '700px', borderRadius: '5%',
          }}
          onClick={handleClickOpen2}>
          <div onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>
            <img src='https://www.hermiston.or.us/sites/default/files/imageattachments/police/page/9351/fingerprint.jpg'
              alt='Generate2' width={'100%'}
              style={{ borderRadius: '5%', opacity: isShown2 ? 0.75 : 1, width: '100%', height: '100%' }} />
            <Dialog open={openDialog2} onClose={handleClose2} >
              <DialogTitle>{"Czy na pewno chcesz abyśmy wygenerowali tag?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Simple TAG: sekwencja DNA (500 nt - losowo) + dwa primery z zapamiętaną pozycją tych primerów -> pewna wartość * ()
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose2}>NIE</Button>
                <Link to="/results">
                  <Button onClick={handleSimpleTag}>TAK</Button>
                </Link>
              </DialogActions>
            </Dialog>
          </div>
        </Box>

        <Box
          sx={{
            display: 'flex', justifyContent: 'space-around', alignItems: 'stretch',
            backgroundSize: 'cover', backgroundRepeat: 'no-repeat', m: 1,
            width: '500px', height: '700px', borderRadius: '5%',
          }}>
          {/* <Link to="/history"> */}
          <div onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>
            <img src='https://us.123rf.com/450wm/stunningart/stunningart1804/stunningart180400006/100107681-surreal-image-as-a-businessman-with-invisible-face-stand-with-crossed-hands-and-question-mark-insted.jpg?ver=6'
              alt='Profile' style={{ borderRadius: '5%', display: 'block', opacity: isShown3 ? 0.65 : 1, width: '100%', height: '100%' }}
            />
            {isShown3 ? (
              <Button sx={{
                position: 'fixed',
                top: '50%',
                //top: '45%', left: '80%' - kurwa mac jebane gowno
                // transform: `translate(${x}%, ${x}%)`,
                textAlign: 'center'
              }}> <Link to="/profile"> My Profile </Link></Button>

            ) : null
            }
          </div>
          {/* </Link> */}
        </Box>
      </Box>

    </>
  );
}

// const itemData = [
//   {
//     img: 'https://biocryptology.com/wp-content/uploads/2019/11/Untitled-1_0001_AdobeStock_275486156.jpg',
//     title: 'Generate #1',
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: 'https://www.hermiston.or.us/sites/default/files/imageattachments/police/page/9351/fingerprint.jpg',
//     title: 'Generate #2',
//   },
//   {
//     img: 'https://us.123rf.com/450wm/stunningart/stunningart1804/stunningart180400006/100107681-surreal-image-as-a-businessman-with-invisible-face-stand-with-crossed-hands-and-question-mark-insted.jpg?ver=6',
//     title: 'Profile',
//   }
// ];
