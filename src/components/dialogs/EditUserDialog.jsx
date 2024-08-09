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
import Stack from '@mui/material/Stack';


const EditUserDialog = ({ open, onClose, user }) => {
    const [formData, setFormData] = React.useState(user);

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
      <DialogTitle sx={{fontSize:'25px', color: '#25434d', fontWeight: 'bold', marginLeft:'20px'}}>Editer un utilisateur</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={6}>
                    <TextField
                        label="Pseudo"
                        name="pseudo"
                        value={formData.pseudo}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Competences"
                        name="competences"
                        value={formData.competences}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Reseaux"
                        name="reseaux"
                        value={formData.reseaux}
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
            <Button onClick={() => onSave(formData)} color="succes" variant='contained'>
            Sauvegarder
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default EditUserDialog;
