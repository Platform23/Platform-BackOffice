import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const ErrorModal = ({ open, onClose, errorMessage }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="error-dialog-title"
            aria-describedby="error-dialog-description"
        >
            <DialogTitle id="error-dialog-title" sx={{ color: 'red' }}>
                Erreur
            </DialogTitle>
            <DialogContent>
                <Typography id="error-dialog-description" color="textPrimary">
                    {errorMessage}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="error">
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ErrorModal;
