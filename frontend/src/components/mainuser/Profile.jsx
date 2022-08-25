// import axios from 'axios';
import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { useState } from 'react';
import Core from '../core/Core';
import mainuserService from '../../services/mainuser.service';
import { Button, TextField, FormLabel, Container, FormGroup, Grid } from '@mui/material';


export const Profile = (props, user) => {

    //api call to backend
    // const { data } = await axios.post("/api/user/profile", user, defaultConfig);

    // const dispatch = useDispatch();
    // const userLogin = useSelector((state) => state.userLogin);
    // const { userInfo } = userLogin;

    // const userUpdate = useSelector((state) => state.userLogin);
    // const { loading, error, success } = userUpdate;

    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');

    // useEffect(() => {
    //     if(!userInfo){
    //         history.push("/");
    //     } else {
    //         setName(userInfo.name)
    //         setSurname(userInfo.surname)
    //         setAddress(userInfo.address)
    //         setCity(userInfo.city)
    //         setPostalCode(userInfo.postalCode)
    //         setPhone(userInfo.phone)
    //     }
    // }, [history, userInfo]);

    const onUserEdited = (user) => {
        mainuserService.updateUser(user).then(
            () => mainuserService.getsecondUserList(user.id)
        );
    };

    return (
        <>
            <Core button={props.button} text={"Edit Profile"}/>
            <Container className='profileContainer'>
                <Grid style={{ display: "flex", margin: "20px", justifyItems: "center" }}>
                    <Form>
                        <FormGroup controlId='name'>
                            {/* <Form.Label>Imię</Form.Label> */}
                            {/* <Form.Control
                                type="text"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}>
                            </Form.Control> */}
                            <FormLabel>Imię</FormLabel>
                            <TextField 
                                id="outlined-basic" 
                                label="Wpisz Imię" 
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId='surname'>
                            <FormLabel>Nazwisko</FormLabel>
                                <TextField 
                                id="outlined-basic" 
                                label="Wpisz Nazwisko" 
                                variant="outlined"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)}/>
                            </FormGroup>
                        <FormGroup controlId='address'>
                            <FormLabel>Adres</FormLabel>
                            <TextField 
                                id="outlined-basic" 
                                label="Wprowadź Adres" 
                                variant="outlined"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId='city'>
                            <FormLabel>Miejscowość</FormLabel>
                            <TextField 
                                id="outlined-basic" 
                                label="Wprowadź Miejscowość" 
                                variant="outlined"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId='postalCode'>
                            <FormLabel>Kod pocztowy</FormLabel>
                            <TextField 
                                id="outlined-basic" 
                                label="Wprowadź Kod Pocztowy" 
                                variant="outlined"
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}/>
                        </FormGroup>
                        <FormGroup controlId='phone'>
                            <FormLabel>Numer telefonu</FormLabel>
                            <TextField 
                                id="outlined-basic" 
                                label="Wprowadź Numer Telefonu" 
                                variant="outlined"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}/>
                        </FormGroup>
                        <Button type="submit" varient="contained">Update</Button>
                    </Form>
                </Grid>
            </Container>    
        </>
    )
}

export default Profile;