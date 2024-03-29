import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const navigate = useNavigate();

  const goToLogin = (goToPage) => {
    navigate('/login', { state: { data: goToPage } });
  }

  return (
    <div className='center'>
      <div className='header-container'>
        <h1>Welcome to App</h1>
        <h2>Please login</h2>
      </div>
      <div className='main-container'>
        <div className='section'>
          <button style={{ width: '100%', marginTop: '8px' }} class='btn btn-primary' type='button' onClick={() => goToLogin('mainuser')}>MainUser Login</button>
        </div>
        <div className='section'>
          <button style={{ width: '100%', marginTop: '8px' }} class='btn btn-primary' type='button' onClick={() => goToLogin('seconduser')}>SecondUser Login</button>
        </div>
      </div>
    </div>
  )
}

export default Main;