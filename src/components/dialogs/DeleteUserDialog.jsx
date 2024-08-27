import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { UserProvider } from '../hooks/UserProvider';
import MessageModal from '../modal/MessageModal';

const DeleteUserDialog = ({ open, onClose, user }) => {
    const { deleteUser } = UserProvider();
    const [error, setError] = useState(null);
    const [showMessageModal, setShowMessageModal] = useState(false);

    // Function when deleting a user
    const handleDeleteUser = async(e) => {
      e.preventDefault();
      try {
          await deleteUser(user.id);
          console.log('User deleted succesfully');
          onClose();
        } catch (responseError) {
          setError(responseError)
          setShowMessageModal(true);
          onClose();
      }
    };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        color="error"
        sx={{
          fontSize:'25px',  
          fontWeight: 'bold',}}
      >
        Supprimer un utilisateur
      </DialogTitle>

      <DialogContent>
        <Typography sx={{
            fontSize:'20px'}}
        >
          Êtes-vous sûr de vouloir supprimer cet utilisateur?
        </Typography>

      </DialogContent>
      <MessageModal
          show={showMessageModal}
          onClose={() => setShowMessageModal(false)}
          errorMessage={error}
      />

      <DialogActions>
        <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
          Annuler
        </Button>
        <Button onClick={handleDeleteUser} variant='contained' color="error">
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteUserDialog;
