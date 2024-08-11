import React from 'react';
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
import { communityProfile, communities, competences } from '../../utils/Constant';



const EditUserDialog = ({ open, onClose, user = {} , onSaveEdit}) => {
    const [formData, setFormData] = React.useState({
        username: user.username || '',
        email: user.email || '',
        profiles: user.profiles || [],
        competences: user.competences || [],
        communities: user.communities || [],
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
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="profiles-label">Profil et rôle</InputLabel>
                        <Select
                            labelId="profiles-label"
                            id="profiles"
                            name="profiles"
                            value={formData.profiles}
                            onChange={handleChange}
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
                        <InputLabel id="competences-label">Compétences</InputLabel>
                        <Select
                            labelId="competences-label"
                            id="competences"
                            name="competences"
                            value={formData.competences}
                            onChange={handleChange}
                            label="Compétences"
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
                        <InputLabel id="communities-label">Communauté d'appartenance</InputLabel>
                        <Select
                            labelId="communities-label"
                            id="communities"
                            name="communities"
                            value={formData.communities}
                            onChange={handleChange}
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
