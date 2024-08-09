import React from 'react';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';

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
  return (
    <NewUserButton
      variant="contained"
      startIcon={<AddIcon />}
    >
      Ajouter un utilisateur
    </NewUserButton>
  );
}

export default NewUserBtn;
