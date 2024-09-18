import React, { useContext, useState } from 'react';
import { Container, Typography, TextField, Button, Box, Backdrop, CircularProgress } from '@mui/material';
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
import AuthContext from '../components/hooks/AuthProvider';
import MessageModal from '../components/modal/MessageModal';

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

const SignIn = () => {
    const { login, user } = useContext(AuthContext);
    const [message, setMessage] = useState(null);
    const [credentials, setCredentials] = useState({
        identifier: '',
        password: '',
    });
    
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [loading, setLoading] = React.useState(false); // State to control Backdrop visibility
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            // Handle authentication
            setLoading(true); // Show Backdrop
            const userData = await login(credentials);
            // console.log(userData)
            // Chech if user is admin
            if (userData.role === 1){
                setMessage("Accès refusé");
                setShowMessageModal(true);
                setLoading(false);
                return;
            }
            navigate("/users"); // Redirect to dashboard
        } catch (responseError) {
            setLoading(false);
            setMessage(responseError);
            setShowMessageModal(true);
        }
    };

    return (
    <BackgroundContainer>
        <LoginBox>
            <Logo src={logo} alt="Logo" />
            <Typography variant="h5" color={'#25434d'} gutterBottom>
                Back-Office
            </Typography>
            <TextField
                label="Pseudo"
                id='identifier'
                name='identifier'
                type='text'
                variant="outlined"
                margin="normal"
                onChange={handleChange}
                fullWidth
            />

            <FormControl sx={{ mt: 3}} variant="filled" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password" variant="filled" fullWidth>Mot de passe</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    onChange={handleChange}
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
        {/* Error Modal */}
        <MessageModal
            open={showMessageModal}
            onClose={() => setShowMessageModal(false)}
            message={message}
        />

        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>

    </BackgroundContainer>
    );
}

export default SignIn;