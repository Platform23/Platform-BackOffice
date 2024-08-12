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


const EditNetworkDialog = ({ open, onClose, network = {} , onSaveEdit}) => {
    const [formData, setFormData] = React.useState({
        name: network.name || '',
        description: network.description || '',
        
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log("Network edited successfully");
    };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
      <DialogTitle 
        sx={{
            fontSize:'25px', 
            color: '#25434d', 
            fontWeight: 'bold', 
            marginLeft:'20px'}}
        >
            Editer un reseau
        </DialogTitle>

        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={12}>
                    <TextField
                        label="Nom reseau"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        name="description"
                        value={formData.description || ''}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={4}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        label="Sujets"
                        name="topics"
                        value={formData.topics || ''}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                        multiline
                        minRows={3}
                    />
                </Grid>                 */}
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
            Annuler
            </Button>

            {/* Save button to save the form */}
            <Button onClick={onSaveEdit} color="success" variant='contained'>
            Sauvegarder
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default EditNetworkDialog;
