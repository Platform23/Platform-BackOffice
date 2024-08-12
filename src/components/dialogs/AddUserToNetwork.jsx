import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Pagination,
} from '@mui/material';
import { UserProvider } from '../hooks/UserProvider';
import ErrorModal from '../modal/ErrorModal';


const AddUserToNetwork = ({ open, onClose, network }) => {
    const { allUsers, fetchAllUsers, addUserNetwork } = UserProvider();
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const usersPerPage = 10;

    useEffect(() => {
        fetchAllUsers(); // Fetch all users when the component mounts
    }, []);

    useEffect(() => {
        if (searchQuery) {
            setFilteredUsers(
                allUsers.filter((user) =>
                    user.pseudo.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredUsers(allUsers);
        }
    }, [searchQuery, allUsers]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        if (selectedUser) {
            // Call the API to add the user to the network using network.id and selectedUser.pseudo
            try{
                await addUserNetwork(network.id, selectedUser.pseudo);
                console.log(`Adding user ${selectedUser.pseudo} to network ${network.id} ==> ${network.name}`);
                onClose();
            }catch (responseError){
                setError(responseError)
                setShowErrorModal(true);
                onClose();
            }
        }
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle sx={{
            fontSize:'25px', 
            color: '#25434d', 
            fontWeight: 'bold'}}>
                Ajouter un utilisateur au réseau: {network.name}
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Rechercher par pseudo"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Pseudo</TableCell>
                                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Email</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {currentUsers.map((user) => (
                                        <TableRow
                                            key={user.id}
                                            onClick={() => handleUserClick(user)}
                                            selected={selectedUser?.id === user.id}
                                            hover
                                            sx={{
                                                cursor: 'pointer',
                                                backgroundColor:
                                                    selectedUser?.id === user.id
                                                        ? '#e0e0e0'
                                                        : 'inherit',
                                            }}
                                        >
                                            <TableCell>{user.pseudo}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <Pagination
                            count={Math.ceil(filteredUsers.length / usersPerPage)}
                            page={currentPage}
                            onChange={(e, page) => setCurrentPage(page)}
                            color="primary"
                        />
                    </Grid>
                </Grid>
            </DialogContent>

            <ErrorModal
                show={showErrorModal}
                onClose={() => setShowErrorModal(false)}
                errorMessage={error}
            />

            <DialogActions>
                <Button onClick={onClose} variant="contained" sx={{backgroundColor: '#969696'}}>
                    Annuler
                </Button>
                <Button
                    onClick={handleAddUser}
                    variant="contained"
                    color="success"
                    disabled={!selectedUser}
                >
                    Ajouter
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddUserToNetwork;
