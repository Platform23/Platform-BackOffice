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

const ViewNetworkDialog = ({ open, onClose, network }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
      <DialogTitle sx={{fontSize:'25px', color: '#25434d', fontWeight: 'bold', marginLeft:'20px'}}>Details</DialogTitle>
        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={12}>
                    <TextField
                    label="Nom de reseau"
                    // Username goes here
                    value={network.networkName}
                    fullWidth
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Email"
                    // User email goes here
                    value={network.description}
                    InputProps={{ readOnly: true }}
                    variant="outlined"
                    fullWidth
                    multiline
                    minRows={4}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Sujets"
                        // User profession goes here
                        value={network.topics}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        variant="outlined"
                        multiline
                        minRows={4}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Participants"
                        // User skills go here
                        value={network.users}
                        InputProps={{ readOnly: true }}
                        fullWidth
                        variant="outlined"
                        multiline
                        minRows={4}
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

export default ViewNetworkDialog;
