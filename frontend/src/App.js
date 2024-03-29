import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Register from './components/Register';
import Login from './components/Login';
import MainUser from './components/mainuser/MainUser';
import SecondUser from './components/seconduser/SecondUser';
import Profile from './components/mainuser/Profile';
import History from './components/mainuser/History';
import Core from './components/core/Core';
import Test from './components/mainuser/Test';
import Results from './components/results/Results';
import Dashboard from './components/dashboard/Dashboard';
import MyTags from './components/mainuser/MyTags';
import Bits from './components/mainuser/Bits';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Cookies from "js-cookie";



const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

Cookies.get("mode",) === 'dark' ? Cookies.set("mode", 'dark') :  Cookies.set("mode", 'light')

function ThemeButton() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  Cookies.set("mode", theme.palette.mode)
  return (
    <IconButton sx={{ ml: 0 }} onClick={colorMode.toggleColorMode} color="inherit">
      {Cookies.get("mode") === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState(Cookies.get("mode"));
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router > {/* The Switch decides which component to show based on the current URL.*/}
          <Routes>
            <Route path="/" element={<Navigate replace to='/login' />} />
            <Route path='/register' element={<Register button={<ThemeButton />}/>}/>
            <Route path="/login" element={<Login button={<ThemeButton />}/>} />
            <Route path="/main" element={<Dashboard button={<ThemeButton />}/>} />
            <Route path="/seconduser" element={<SecondUser button={<ThemeButton />}/>} />
            <Route path="/profile" element={<Profile button={<ThemeButton />}/>} />
            <Route path="/history" element={<History button={<ThemeButton />}/>} />
            <Route path="/core" element={<Core button={<ThemeButton />}/>} />
            <Route path="/test" element={<Test button={<ThemeButton />}/>} />
            <Route path="/results" element={<Results button={<ThemeButton />}/>} />
            <Route path="/history/:id" element={<MyTags button={<ThemeButton />}/>}/>
            <Route path="/bits/:id" element={<Bits button={<ThemeButton />}/>} />
          </Routes>
        </Router >

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}