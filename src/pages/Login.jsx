import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import logo from '../assets/images/logo.png'; 
import { useNavigate } from 'react-router-dom'

const BackgroundContainer = styled(Container)({
  height: '100vh',
  width: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
//   backgroundColor: 'whitesmoke',
});

const LoginBox = styled(Box)({
  width: '100%',
  maxWidth: 400,
  padding: '20px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
  textAlign: 'center',
});

const Logo = styled('img')({
  marginBottom: '20px',
});

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const navigate = useNavigate(); // Initialize useNavigate
    
    const handleLogin = () => {
        // Handle authentication
        // After successful authentication, redirect to the dashboard
        navigate('/users');
    };

    return (
    <BackgroundContainer>
        <LoginBox>
        <Logo src={logo} alt="Logo" />
        <Typography variant="h5" color={'#25434d'} gutterBottom>
            Back office
        </Typography>
        <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
        />

        <FormControl sx={{ mt: 3}} variant="filled" fullWidth>
            <InputLabel htmlFor="outlined-adornment-password" variant="filled" fullWidth>Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                endAdornment={
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                label="Password"
            />
        </FormControl>

        <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{ marginTop: '20px', backgroundColor:'#25434d' }}
            onClick={handleLogin}
        >
            Se connecter
        </Button>

        </LoginBox>
    </BackgroundContainer>
    );
}

export default Login;