// import axios from 'axios';
import React, { useEffect } from 'react';
import { Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import Core from '../core/Core';
import mainuserService from '../../services/mainuser.service';
import { Button, TextField, FormLabel, Container, FormGroup, Grid } from '@mui/material';

export const Profile = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [user, setUser] = useState('');

  const getUserInfo = () => {
    mainuserService.getUserInfo()
      .then((response) => {
        setUser(response);
        setName(response.first_name);
        setSurname(response.last_name);
      });
  }
  const onUserEdited = (event) => {
    event.preventDefault();
    const userData = user;
    userData.first_name = name;
    userData.last_name = surname;
    
    console.log('userdata', userData);
    mainuserService.updateUser(userData).then(() => getUserInfo());
  };

  useEffect(() => {
    console.log('xddd')
    getUserInfo();
  }, [])


  return (
    <>
      <Core button={props.button} text={"Edit Profile"} />
      <Container className='profileContainer'>
        <Grid style={{ display: "flex", margin: "20px", justifyItems: "center" }}>
          <Form onSubmit={onUserEdited}>
            <FormGroup controlId='name'>
              <FormLabel>Imię</FormLabel>
              <TextField
                id="outlined-basic"
                label="Wpisz Imię"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </FormGroup>
            {name.first_name}
            <FormGroup controlId='surname'>
              <FormLabel>Nazwisko</FormLabel>
              <TextField
                id="outlined-basic"
                label="Wpisz Nazwisko"
                variant="outlined"
                value={surname}
                onChange={(e) => setSurname(e.target.value)} />
            </FormGroup>
            {surname.last_name}
            <Button type="submit" varient="contained">Update</Button>
          </Form>
        </Grid>
      </Container>
    </>
  )
}

export default Profile;