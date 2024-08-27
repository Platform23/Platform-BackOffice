import React, {useState, useCallback, useContext} from 'react';
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
} from '@mui/material';
import { subjects } from '../../utils/Constant';
import { useNetworks } from '../hooks/NetworkProvider';
import MessageModal from '../modal/MessageModal';


const EditNetworkDialog = ({ open, onClose, network = {} }) => {
    const {updateNetwork} = useNetworks();
    const [message, setMessage] = useState(null);
    const [showMessageModal, setShowMessageModal] = useState(false);
    const [formData, setFormData] = React.useState({
        name: network.name || '',
        description: network.description || '',
        subject1: network.subjects?.[0]?.name || '',
        subject2: network.subjects?.[1]?.name || '',
        subject3: network.subjects?.[2]?.name || '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // console.log("Network edited successfully");
    };

    const handleDropdownChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    // Function when updating a network
    const handleUpdateNetwork = async(e) => {
        e.preventDefault();
        try {
            await updateNetwork(formData, network.id);
            console.log('Network updated succesfully');
            onClose();
          } catch (responseError) {
            setMessage(responseError)
            setShowMessageModal(true);
            onClose();
        }
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
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="subject1">Sujet 1</InputLabel>
                        <Select
                            labelId="subject1"
                            id="subject1"
                            name="subject1"
                            value={formData.subject1}
                            onChange={handleDropdownChange}
                            label="Profil et rôle"
                            // multiple
                        >
                            {subjects.map((topic) => (
                                <MenuItem key={topic.id} value={topic.label}>
                                    {topic.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="subject2">Sujet 2</InputLabel>
                        <Select
                            labelId="subject2"
                            id="subject2"
                            name="subject2"
                            value={formData.subject2}
                            onChange={handleDropdownChange}
                            label="Profil et rôle"
                            // multiple
                        >
                            {subjects.map((topic) => (
                                <MenuItem key={topic.id} value={topic.label}>
                                    {topic.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="subject3">Sujet 3</InputLabel>
                        <Select
                            labelId="subject3"
                            id="subject3"
                            name="subject3"
                            value={formData.subject3}
                            onChange={handleDropdownChange}
                            label="Profil et rôle"
                            // multiple
                        >
                            {subjects.map((topic) => (
                                <MenuItem key={topic.id} value={topic.label}>
                                    {topic.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
                </Grid> */}
            </Grid>
        </DialogContent>

        <MessageModal
            show={showMessageModal}
            onClose={() => setShowMessageModal(false)}
            message={message}
        />

        <DialogActions>
            <Button onClick={onClose} variant='contained' sx={{backgroundColor: '#969696'}}>
            Annuler
            </Button>

            {/* Save button to save the form */}
            <Button onClick={handleUpdateNetwork} color="success" variant='contained'>
            Sauvegarder
            </Button>
        </DialogActions>
    </Dialog>
  );
};

export default EditNetworkDialog;
