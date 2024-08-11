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

const ViewUserDialog = ({ open, onClose, user }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
      <DialogTitle sx={{fontSize:'25px', color: '#25434d', fontWeight: 'bold', marginLeft:'20px'}}>Details</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={6}>
                    <TextField
                    label="Pseudo"
                    // Username goes here
                    value={user.username}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Email"
                    // User email goes here
                    value={user.email}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Profil et rôle"
                    // User profession goes here
                    value={user.profiles}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Compétences"
                    // User skills go here
                    value={user.competences}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Communauté d'appartenance"
                    // User networks go here
                    value={user.communities}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
            Fermer
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default ViewUserDialog;
