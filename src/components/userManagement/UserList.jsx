import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewUserDialog from '../dialogs/ViewUserDialog';
import EditUserDialog from '../dialogs/EditUserDialog';
import DeleteUserDialog from '../dialogs/DeleteUserDialog';

const UserList = ({ users}) => {

    const [selectedUser, setSelectedUser] = useState(null);
    const [dialogType, setDialogType] = useState(null);

    const handleOpenDialog = (user, type) => {
        setSelectedUser(user);
        setDialogType(type);
    };

    const handleCloseDialog = () => {
        setSelectedUser(null);
        setDialogType(null);
    };

    const handleSaveEdit = () => {
      console.log('Saved changes user' + selectedUser.id);
      handleCloseDialog();
    };

    const handleConfirmDelete = () => {
        console.log('Deleted user' + selectedUser.id);
        handleCloseDialog();
    };


  return (
    <TableContainer component={Paper} sx={{ maxWidth: '55%', marginLeft: 'auto', backgroundColor: '#f5f5f5'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Pseudo</TableCell>
            <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Email</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', color: '#25434d'}} >Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell sx={{fontSize: '18px'}}>{user.username}</TableCell>
              <TableCell sx={{fontSize: '15px', fontWeight: 'bold'}}>{user.email}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => handleOpenDialog(user, 'view')}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleOpenDialog(user, 'edit')}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleOpenDialog(user, 'delete')}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {dialogType === 'view' && (
        <ViewUserDialog open={Boolean(dialogType)} onClose={handleCloseDialog} user={selectedUser} />
      )}

      {dialogType === 'edit' && (
        <EditUserDialog open={Boolean(dialogType)} onClose={handleCloseDialog} user={selectedUser} onSaveEdit={handleSaveEdit}/>
      )}

      {dialogType === 'delete' && (
        <DeleteUserDialog open={Boolean(dialogType)} onClose={handleCloseDialog} onConfirm={handleConfirmDelete} />
      )}  

    </TableContainer>
  );
};

export default UserList;
