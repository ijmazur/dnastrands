import React from 'react';
import { useState, useEffect } from 'react';
import MainUser from './MainUser';

export const Profile = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <>
            <MainUser />
            Edit your details
            Imię
            Nazwisko
            Adres
            Miejscowość
            Kod pocztowy
            Numer telefonu
        </>
    )
}

export default Profile;