import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

const DeleteUserDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        color="error"
        sx={{
          fontSize:'25px',  
          fontWeight: 'bold',}}
      >
        Supprimer utilisateur
      </DialogTitle>

      <DialogContent>
        <Typography sx={{
            fontSize:'20px'}}
        >
          Êtes-vous sûr de vouloir supprimer cet utilisateur ?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Annuler
        </Button>
        <Button onClick={onConfirm} color="error">
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;
