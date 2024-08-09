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


const AddNetworkDialog = ({ open, onClose, onAdd}) => {
    const [formData, setFormData] = React.useState({
        networkName: '',
        description: '',
        topics: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        console.log("Network added successfully");
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
                Ajouter un reseau
        </DialogTitle>

        <DialogContent>
            <Grid container spacing={2} sx={{padding:'20px'}}>
                <Grid item xs={12}>
                    <TextField
                        label="Nom reseau"
                        name="networkName"
                        value={formData.networkName}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Sujets"
                        name="topics"
                        value={formData.topics}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                    />
                </Grid>                
            </Grid>
        </DialogContent>

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
                Annuler
            </Button>

            {/* Save button to save the form */}
            <Button onClick={onAdd} color="success" variant='contained'>
                Ajouter
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default AddNetworkDialog;
