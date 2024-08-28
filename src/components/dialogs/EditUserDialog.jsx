import React, {useState, useCallback, useContext} from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import {userRole } from '../../utils/Constant';
import { UserProvider } from '../hooks/UserProvider';
import MessageModal from '../modal/MessageModal';
import Alert from '@mui/material/Alert';



const EditUserDialog = ({ open, onClose, user = {} }) => {
    const { updateUser } = UserProvider();
    const [message, setMessage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [formData, setFormData] = React.useState({
        fullName: user.fullName || '',
        pseudo: user.pseudo || '',
        email: user.email || '',
        profession: user.profession || '',
        role: user.role || '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDropdownChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    // Function when updating a user
    const handleUpdateUser = async(e) => {
        e.preventDefault();
        try {
            console.log('Updating user...');
            await updateUser(formData, user.id);
            console.log('User updated succesfully');
            setShowAlert(true);  // Show the Alert
            // Hide the alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            
            // onClose();
          } catch (responseError) {
            setMessage(responseError)
            setShowMessageModal(true);
            onClose();
        }
      };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
        {showAlert && <Alert severity="success">Utilisateur {user.pseudo} modifié avec succès.</Alert>}
      <DialogTitle 
        sx={{
            fontSize:'25px', 
            color: '#25434d', 
            fontWeight: 'bold', 
            marginLeft:'20px'}}
        >
                Editer un utilisateur
        </DialogTitle>

        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={6}>
                    <TextField
                        label="Nom complet"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Pseudo"
                    value={formData.pseudo}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12}>
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
            </Grid>
        </DialogContent>
        
        <MessageModal
            open={showMessageModal}
            onClose={() => setShowMessageModal(false)}
            message={message}
        />

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
                Fermer
            </Button>

            {/* Save button to save the form */}
            <Button onClick={handleUpdateUser} color="success" variant='contained'>
                Sauvegarder
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default EditUserDialog;
