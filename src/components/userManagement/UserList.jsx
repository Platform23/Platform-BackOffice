import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewUserDialog from '../dialogs/ViewUserDialog';

const UserList = ({ users, onView, onEdit, onDelete }) => {

    const [selectedUser, setSelectedUser] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleView = (user) => {
        setSelectedUser(user);
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
        setSelectedUser(null);
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
                <IconButton color="primary" onClick={() => handleView(user)}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => onEdit(user.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => onDelete(user.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedUser && (
        <ViewUserDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          user={selectedUser}
        />
      )}
    </TableContainer>
  );
};

export default UserList;
