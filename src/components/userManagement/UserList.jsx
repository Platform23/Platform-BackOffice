import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const UserList = ({ users, onView, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: '55%', marginLeft: 'auto', backgroundColor: '#f5f5f5'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Pseaudo</TableCell>
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
                <IconButton color="primary" onClick={() => onView(user.id)}>
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
    </TableContainer>
  );
};

export default UserList;
