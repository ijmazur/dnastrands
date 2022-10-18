import './SecondUser.css';
import { useEffect, useState } from 'react'
import authService from '../../services/auth.service';
import UserData from '../UserData';

export const SecondUser = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    authService.getCurrentUser().then(
      (data) => {
        setUserData(data);
      }
    )
  }, [])

  return (
    <div>
      <div className="header">
        <h1>SecondUser's Home Page</h1>
        <UserData userData={userData} />
      </div>
    </div>
  )
};

export default SecondUser;