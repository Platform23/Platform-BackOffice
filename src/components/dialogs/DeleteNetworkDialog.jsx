import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';
import { useNetworks } from '../hooks/NetworkProvider';
import MessageModal from '../modal/MessageModal';
import Alert from '@mui/material/Alert';


const DeleteNetworkDialog = ({ open, onClose, network}) => {
    const { deleteNetwork } = useNetworks();
    const [message, setMessage] = useState(null);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // Function when deleting a network
    const handleDeleteNetwork = async(e) => {
      e.preventDefault();
      try {
          await deleteNetwork(network.id);
          setMessage('Réseau supprimé avec succès.')
          setShowAlert(true);  // Show the Alert
          setShowMessageModal(true);
          <Alert severity="success">Network deleted succesfully.</Alert>
          console.log('Network deleted succesfully');
          onClose();
        } catch (responseError) {
          setMessage(responseError)
          setShowMessageModal(true);
          onClose();
      }
    };

  return (
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        {showAlert && (
                <Alert
                    severity="success"
                    sx={{
                        position: 'fixed',
                        top: '10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1500,
                    }}
                >
                    Réseau supprimé avec succès.
                </Alert>
            )}
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

        <MessageModal
            open={showMessageModal}
            onClose={() => setShowMessageModal(false)}
            message={message}
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
