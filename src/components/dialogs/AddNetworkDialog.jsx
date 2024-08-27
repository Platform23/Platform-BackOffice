import React, { useState, useCallback} from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  OutlinedInput,
} from '@mui/material';
import { useNetworks } from '../hooks/NetworkProvider';
import { subjects } from '../../utils/Constant';
import MessageModal from '../modal/MessageModal';
import Alert from '@mui/material/Alert';


const AddNetworkDialog = ({ open, onClose}) => {
    const {addNetwork} = useNetworks();
    const [message, setMessage] = useState(null);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        subjects: [],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleDropdownChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    
    // Function when adding a new network
    const handleAddNetwork = async(e) => {
        e.preventDefault();
        try {
            console.log("Adding...");
            await addNetwork(formData);
            setFormData({ name: '', description: '', subjects: [] });  // Clear the text fields
            setShowAlert(true);  // Show the Alert
            // Hide the alert after 3 seconds
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
            console.log("Network added successfully");
            // onClose();
        } catch (responseError) {
            setMessage(responseError.message || String(responseError));
            setShowMessageModal(true);
            // onClose();
        }
    };

  return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth >
        {showAlert && <Alert severity="success">Réseau ajouté avec succès.</Alert>}
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
                            name="name"
                            value={formData.name}
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
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={4}
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <input
                            accept="image/*"
                            type="file"
                            onChange={(e) => setFormData({
                                ...formData,
                                cover: e.target.files[0]
                            })}
                        />
                    </Grid> */}
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="subject1">Sujets</InputLabel>
                            <Select
                                labelId="subjects"
                                id="subjects"
                                name="subjects"
                                value={formData.subjects}
                                onChange={handleDropdownChange}
                                label="Sujets"
                                multiple
                            >
                                {subjects.map((topic) => (
                                    <MenuItem key={topic.value} value={topic.value}>
                                        {topic.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>


            <MessageModal
                open={showMessageModal}
                onClose={() => setShowMessageModal(false)}
                message={message}
            />
            <DialogActions>
                <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
                    Fermer
                </Button>

                {/* Save button to save the form */}
                <Button onClick={handleAddNetwork} color="success" variant='contained'>
                    Ajouter
                </Button>
            </DialogActions>
        </Dialog>
  );
};

export default AddNetworkDialog;
