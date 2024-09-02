import React, { useEffect } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { useNetworks } from '../hooks/NetworkProvider';



const ShowNetworkUsers = ({ open, onClose, network }) => {
    const {networkInfo, fetchNetworkInfo} = useNetworks();

    useEffect(() => {
        // fetchAllUsers(); // Fetch all users when the component mounts
        fetchNetworkInfo(network.uuid); // Fetch information of the selected network
    }, []);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            {/* {showAlert && <Alert severity="success"> {selectedUser.pseudo} ajouté au réseau {network.name}.</Alert>} */}
            <DialogTitle sx={{
            fontSize:'25px', 
            color: '#25434d', 
            fontWeight: 'bold'}}>
                Liste des utilisateurs au réseau: {network.name}
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Pseudo</TableCell>
                                        {/* <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Email</TableCell> */}
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {networkInfo && networkInfo.users ? (
                                            networkInfo.users.map((user) => (
                                                <TableRow key={user.id} hover>
                                                    <TableCell>{user.pseudo}</TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            <TableRow>
                                                <TableCell colSpan={2}>Chargement...</TableCell>
                                            </TableRow>
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} variant="contained" sx={{backgroundColor: '#969696'}}>
                    Fermer
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ShowNetworkUsers;
