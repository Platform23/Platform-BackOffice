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
                <Grid item xs={6}>
                    <TextField
                    label="Profession"
                    // User profession goes here
                    value={user.profession}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                    label="Competences"
                    // User skills go here
                    value={user.competences}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Reseaux"
                    // User networks go here
                    value={user.reseaux}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} color="primary" variant='outlined'>
            Fermer
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default ViewUserDialog;
