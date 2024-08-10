import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
} from '@mui/material';


const EditUserDialog = ({ open, onClose, user = {} , onSaveEdit}) => {
    const [formData, setFormData] = React.useState({
        username: user.username || '',
        email: user.email || '',
        profession: user.profession || '',
        skills: user.competences || '',
        networks: user.reseaux || '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log("User edited successfully");
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
                        label="Pseudo"
                        name="pseudo"
                        value={formData.username || ''}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Profession"
                        name="profession"
                        value={formData.skills || ''}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Competences"
                        name="competences"
                        value={formData.skills || ''}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Reseaux"
                        name="reseaux"
                        value={formData.networks || ''}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
            Annuler
            </Button>

            {/* Save button to save the form */}
            <Button onClick={onSaveEdit} color="success" variant='contained'>
            Sauvegarder
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default EditUserDialog;
