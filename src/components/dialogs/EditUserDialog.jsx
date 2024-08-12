import React, {useState} from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { UserProvider } from '../hooks/UserProvider';
import ErrorModal from '../modal/ErrorModal';


const EditUserDialog = ({ open, onClose, user = {} }) => {
    const { updateUser } = UserProvider();
    const [error, setError] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [formData, setFormData] = React.useState({
        fullName: user.fullName || '',
        pseudo: user.pseudo || '',
        email: user.email || '',
        profession: user.profession || '',
        uuid: user.uuid || '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function when updating a new user
    const handleUpdateUser = async(e) => {
        e.preventDefault();
        try {
            await updateUser(formData, user.id);
            console.log('User updated succesfully');
            onClose();
          } catch (responseError) {
            setError(responseError)
            setShowErrorModal(true);
            onClose();
        }
      };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
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
                    <TextField
                        label="UUID"
                        value={user.uuid}
                        fullWidth
                        InputProps={{ readOnly: true }}
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </DialogContent>
        
        <ErrorModal
            show={showErrorModal}
            onClose={() => setShowErrorModal(false)}
            errorMessage={error}
        />

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
            Annuler
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
