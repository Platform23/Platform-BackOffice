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
                    label="Nom complet"
                    value={user.fullName}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Pseudo"
                    value={user.pseudo}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Email"
                    value={user.email}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Profession"
                    value={user.profession}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="UUID"
                    // User networks go here
                    value={user.uuid}
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
