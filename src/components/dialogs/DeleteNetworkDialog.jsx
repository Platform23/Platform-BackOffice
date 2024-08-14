import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { useNetworks } from '../hooks/NetworkProvider';
import ErrorModal from '../modal/ErrorModal';

const DeleteNetworkDialog = ({ open, onClose, network}) => {
    const { deleteNetwork } = useNetworks();
    const [error, setError] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);

    // Function when deleting a network
    const handleDeleteNetwork = async(e) => {
      e.preventDefault();
      try {
          await deleteNetwork(network.id);
          console.log('Network deleted succesfully');
          onClose();
        } catch (responseError) {
          setError(responseError)
          setShowErrorModal(true);
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
        Supprimer un reseau
      </DialogTitle>

      <DialogContent>
        <Typography sx={{
            fontSize:'20px'}}
        >
          Êtes-vous sûr de vouloir supprimer ce reseau?
        </Typography>
      </DialogContent>
      <ErrorModal
          show={showErrorModal}
          onClose={() => setShowErrorModal(false)}
          errorMessage={error}
      />

      <DialogActions>
        <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
          Annuler
        </Button>
        <Button onClick={handleDeleteNetwork} variant='contained' color="error">
          Supprimer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteNetworkDialog;
