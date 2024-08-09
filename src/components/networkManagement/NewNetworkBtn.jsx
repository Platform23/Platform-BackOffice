import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import AddNetworkDialog from '../dialogs/AddNetworkDialog';

const NewNetworkButton = styled(Button)({
  backgroundColor: '#25434d', // Dark blue color
  color: 'white',
  '&:hover': {
    backgroundColor: '#163d4a', // Darker shade on hover
  },
  marginLeft: 0, // Position to the left side of the screen
  marginBottom: 40,
  alignSelf: 'flex-start',
  textTransform: 'none',
});

const NewNetworkBtn = () => {

  const [dialogType, setDialogType] = useState(false);

  const handleOpenDialog = () => {
      setDialogType(true);
  };

  const handleCloseDialog = () => {
      setDialogType(false);
  };

  // Function when adding a new network
  const handleAddNetwork = () => {
    console.log('Network added succesfully');
    handleCloseDialog();
  };

  return (
    <div>
        <NewNetworkButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleOpenDialog}
        >
        Ajouter un reseaux
        </NewNetworkButton>

        <AddNetworkDialog 
        open={dialogType}
        onClose={handleCloseDialog}
        onAdd={handleAddNetwork}
        />
    </div>
  );
}

export default NewNetworkBtn;
