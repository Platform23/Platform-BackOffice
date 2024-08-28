import React, { useState, useCallback, useContext } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { communityProfile, communities, competences, userRole } from '../../utils/Constant';
import AuthContext from '../hooks/AuthProvider';
import MessageModal from '../modal/MessageModal';
import Alert from '@mui/material/Alert';

const AddUserDialog = ({ open, onClose}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { register } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [formData, setFormData] = React.useState({
        email: '',
        pseudo: '',
        password: '',
        role: '',
        competences: [],
        communities: [],
        profiles: [],
        remember_me: true,
    });

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      }, []);

    const handleDropdownChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);
    
    
      // Function when adding a new user
      const handleAddUser = async(e) => {
        e.preventDefault();
        try {
            console.log('Adding user...');
            await register(formData);
            setFormData(
                { 
                email: '', 
                pseudo: '', 
                password: '', 
                role: '',
                competences: [], 
                communities: [], 
                profiles: []}
            );  // Clear the text fields
            setShowAlert(true);  // Show the Alert

            // Hide the alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            console.log('User added succesfully');
            // onClose();
          } catch (responseError) {
            setError(responseError)
            setShowMessageModal(true);
            onClose();
        }
      };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
      {showAlert && <Alert severity="success">Utilisateur ajouté avec succès.</Alert>}
      <DialogTitle 
        sx={{
            fontSize:'25px', 
            color: '#25434d', 
            fontWeight: 'bold', 
            marginLeft:'20px'}}
        >
                Ajouter un utilisateur
        </DialogTitle>

        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={6}>
                    <TextField
                        label="Nom d'utilisateur"
                        name="pseudo"
                        id="pseudo"
                        type='text'
                        value={formData.pseudo}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Adresse e-mail"
                        id="email"
                        name="email"
                        type='email'
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl  variant="filled" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password" variant="outlined" fullWidth>Mot de passe</InputLabel>
                        <OutlinedInput
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
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
                </Grid>
                
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel id="profiles-label">Rôle</InputLabel>
                        <Select
                            labelId="role"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleDropdownChange}
                        >
                            {userRole.map((role) => (
                                <MenuItem key={role.value} value={role.value}>
                                    {role.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="profiles-label">Profil et rôle</InputLabel>
                        <Select
                            labelId="profiles"
                            id="profiles"
                            name="profiles"
                            value={formData.profiles}
                            onChange={handleDropdownChange}
                            label="Profil et rôle"
                            multiple
                        >
                            {communityProfile.map((profile) => (
                                <MenuItem key={profile.value} value={profile.value}>
                                    {profile.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="competences">Compétences numériques et collaboratives</InputLabel>
                        <Select
                            labelId="competences"
                            id="competences"
                            name="competences"
                            value={formData.competences}
                            onChange={handleDropdownChange}
                            label="Compétences numériques et collaboratives"
                            multiple
                        >
                            {competences.map((comp) => (
                                <MenuItem key={comp.value} value={comp.value}>
                                    {comp.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="communities">Communauté d'appartenance</InputLabel>
                        <Select
                            labelId="communities"
                            id="communities"
                            name="communities"
                            value={formData.communities}
                            onChange={handleDropdownChange}
                            label="Communauté d'appartenance"
                            multiple
                        >
                            {communities.map((communitie) => (
                                <MenuItem key={communitie.value} value={communitie.value}>
                                    {communitie.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {/* Error Modal */}

                </Grid>

            </Grid>
        </DialogContent>
        
        <MessageModal
            open={showMessageModal}
            onClose={() => setShowMessageModal(false)}
            message={error}
        />

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
                Fermer
            </Button>

            {/* Save button to save the form */}
            <Button onClick={handleAddUser} color="success" variant='contained'>
                Ajouter
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default AddUserDialog;
