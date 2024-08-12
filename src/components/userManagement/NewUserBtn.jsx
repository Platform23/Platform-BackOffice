import React, { useState } from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import AddUserDialog from '../dialogs/AddUserDialog';

const NewUserButton = styled(Button)({
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

const NewUserBtn = () => {

  const [dialogType, setDialogType] = useState(false);

  const handleOpenDialog = () => {
      setDialogType(true);
  };

  const handleCloseDialog = () => {
      setDialogType(false);
  };

  // Function when adding a new user
  // const handleAddUser = () => {
  //   // console.log('User added succesfully');
  //   handleCloseDialog();
  // };

  return (
    <div>

    <NewUserButton
      variant="contained"
      startIcon={<AddIcon />}
      onClick={handleOpenDialog}
    >
      Ajouter un utilisateur

    </NewUserButton>
    <AddUserDialog 
      open={dialogType}
      onClose={handleCloseDialog}
      // onAdd={handleAddUser}
    />
    </div>
  );
}

export default NewUserBtn;
