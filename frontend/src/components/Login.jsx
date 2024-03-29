import * as React from 'react';
import {Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Box, Grid, Typography, Container, IconButton, InputAdornment} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import {Visibility, VisibilityOff } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
import authService from '../services/auth.service';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://dnastrands.pl/">
        dnastrands.pl
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn(props) {

  const navigate = useNavigate();
  const { state } = useLocation();
  // const { data } = state;
  const startValid = { isValid: "no", errorText: "", focused: false }
  const [passwordVisibility, setPasswordVisibility] = React.useState(false);
  const [passwordValidation, setPasswordValidation] = React.useState(startValid);
  const [emailValidation, setEmailValidation] = React.useState(startValid);
  const [passwordInput, setPasswordInput] = React.useState("password");

  const handleVisibilityClick = () => {
    setPasswordVisibility(!passwordVisibility);
    setPasswordInput(passwordVisibility ? "password" : "text");
  }

  const emptyValidation = (event, setField, prev) => {
    if (event)
      setField(prev => ({
        ...prev,
        isValid: true,
        errorText: "",
        focused: true,
      }));
    else
      setField(prev => ({
        ...prev,
        isValid: false,
        errorText: "Field can't be empty!",
        focused: false
      }));
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('email');
    const password = data.get('password');

    authService.login(username, password, data).then(
      (success) => {
        if (data === 'user') {
          navigate('/seconduser');
        } else {
          navigate('/main');
        }
      },
      (error) => {
        alert('You entered wrong username or password!');
      }
    );
    console.log({
      username: data.get('email'),
      password: data.get('password'),
    });
  };

  // const sumbitLogin = (event) => {
  //   event.preventDefault();
  //   const username = event.target[0].value;
  //   const password = event.target[1].value;
  //   // const data = new FormData(event.currentTarget);
  //   authService.login(username, password, data).then(
  //     (success) => {
  //       if (data === 'user') {
  //         navigate('/dashboard');
  //       } else {
  //         navigate('/restaurantview');
  //       }
  //     },
  //     (error) => {
  //       alert('You entered wrong username or password!');
  //     }
  //   );
  // };

  return (
    <Container component="main" maxWidth="xs" className="center">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img src={require("../images/dnalogo.png")} width="30%" height="30%" alt=" " />

        <Typography component="h1" variant="h5">
          {props.button}
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            onChange={(event) => { emptyValidation(event.target.value, setEmailValidation, emailValidation) }}
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <LoginIcon />
                </InputAdornment>
              ,
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="email"
            autoComplete="email"
            autoFocus
            focused={emailValidation.focused}
            error={!emailValidation.isValid}
            helperText={emailValidation.errorText}
            color="primary"
          />
          <TextField
            onChange={(event) => { emptyValidation(event.target.value, setPasswordValidation, passwordValidation) }}
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleVisibilityClick}
                  >
                    {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
            }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={passwordInput}
            id="password"
            autoComplete="current-password"
            focused={passwordValidation.focused}
            error={!passwordValidation.isValid}
            helperText={passwordValidation.errorText}
            color="primary"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="string"
            sx={{ mt: 3, mb: 2 }}
            style={{ border: '1px solid' }}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/forgotten-password" variant="body2">
                Forgot your password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Register"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}