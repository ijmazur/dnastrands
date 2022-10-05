// import axios from 'axios';
import React, { useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import Core from '../core/Core';
import mainuserService from '../../services/mainuser.service';
import pastOrderService from '../../services/pastOrder.service';
import { Button, TextField, FormLabel, Container, FormGroup, Grid, Typography } from '@mui/material';
import './MyTags.css';

export const Profile = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [mail, setEmail] = useState('');
  const [orderNo, setOrderNo] = useState([]);

  const [user, setUser] = useState('');

  const getUserInfo = () => {
    mainuserService.getUserInfo()
      .then((response) => {
        setUser(response);
        setName(response.first_name);
        setSurname(response.last_name);
        setUsername(response.username);
        setEmail(response.mail);
      });
  }

  const getRecentTags = () => {
    pastOrderService.getMyTags().then((response) => {
      const tag = response['Tags'];
      console.log('tag', tag);
      console.log('response', response);
      tag.forEach(row => {
        row.orderNumber = `${row.secret ? 'TAG' : 'S-TAG'}${row.id.toString().padStart(6, '0')}`
      })
      setOrderNo(tag);
      console.log('tag2', tag);
      console.log('tag2 set', setOrderNo(tag));
      console.log('orderNo', orderNo);
    });
  }

  const onUserEdited = (event) => {
    event.preventDefault();
    const userData = user;
    userData.first_name = name;
    userData.last_name = surname;
    mainuserService.updateUser(userData).then(() => getUserInfo());
  };

  useEffect(() => {
    getUserInfo();
    getRecentTags();
  }, [])

  //key style={{ overflow: 'auto', textAlign: 'right', fontWeight: 'bold' }}
  //value style={{ maxWidth: '50%', overflow: 'auto', overflowWrap: 'break-word' }}
  //holder style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: '1em' }}
  return (
    <>
      <Core button={props.button} text={"Edit Your Profile"} />
      <Container className='profileContainer' direction={'row'}>
        <Grid container direction={'row'}
          justify="flex-start" alignItems="flex-start" spacing={1}>
          <Grid style={{
            display: "flex", margin: "20px", justifyItems: "center",
            maxWidth: '100%'
          }}>
            <Form onSubmit={onUserEdited}>
              <FormGroup controlId='name'>
                <FormLabel style={{ margin: "5px" }}>Name</FormLabel>
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </FormGroup>
              <FormGroup controlId='surname'>
                <FormLabel style={{ margin: "5px" }}>Surname</FormLabel>
                <TextField
                  id="outlined-basic"
                  label="Your Surname"
                  variant="outlined"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)} />
              </FormGroup>
              <Button type="submit" variant="string" style={{ margin: '10px' }}>Update Details</Button>
            </Form>
          </Grid>
          <Grid style={{
            display: "flex", margin: "20px", justifyItems: "center",
            maxWidth: '100%', marginLeft: '100px'
          }}>
            <Typography variant="h5" nowrap={true}>
              <b>Account Details:</b> <br/>
                &emsp; <b>Name:</b> {name} <br />
                &emsp; <b>Surname:</b> {surname} <br/>
                &emsp; <b>Username:</b> {username} <br/>
                &emsp; <b>E-Mail:</b> {mail} <br/>
                &emsp; <b>Recent Orders:</b> {} <br/>
            </Typography>
            {/* <Typography variant="h5" nowrap={true}>
              <b>Account Details:</b> <br />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: '1em' }}>
                &emsp; <div style={{ overflow: 'auto', textAlign: 'left', fontWeight: 'bold' }}>
                  Name:
                </div>
                <div style={{ maxWidth: '50%', overflow: 'auto', overflowWrap: 'break-word' }}>
                  {name} <br />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: '1em' }}>
                &emsp; <div style={{ overflow: 'auto', textAlign: 'right', fontWeight: 'bold' }}><b>Surname:</b></div> <div style={{ maxWidth: '50%', overflow: 'auto', overflowWrap: 'break-word' }}>{surname} <br /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: '1em' }}>
                &emsp; <div style={{ overflow: 'auto', textAlign: 'right', fontWeight: 'bold' }}><b>Username:</b> </div><div style={{ maxWidth: '50%', overflow: 'auto', overflowWrap: 'break-word' }}>{username} <br /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: '1em' }}>
                &emsp; <div style={{ overflow: 'auto', textAlign: 'right', fontWeight: 'bold' }}><b>E-Mail:</b></div> <div style={{ maxWidth: '50%', overflow: 'auto', overflowWrap: 'break-word' }}>{mail} <br /></div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', columnGap: '1em' }}>
                &emsp; <div style={{ overflow: 'auto', textAlign: 'right', fontWeight: 'bold' }}><b>Recent Orders:</b></div> <div style={{ maxWidth: '50%', overflow: 'auto', overflowWrap: 'break-word' }}>{ } <br /></div>
              </div>
            </Typography> */}
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Profile;