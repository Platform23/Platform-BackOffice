import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewNetworkDialog from '../dialogs/ViewNetworkDialog';
import EditNetworkDialog from '../dialogs/EditNetworkDialog';
import DeleteNetworkDialog from '../dialogs/DeleteNetworkDialog';
import AddUserToNetwork from '../dialogs/AddUserToNetwork';
import ShowNetworkUsers from '../dialogs/ShowNetworkUsersDialog';

const NetworkList = ({networks}) => {

    const [selectedNetwork, setSelectedNetwork] = useState(null);
    const [dialogType, setDialogType] = useState(null);

    const handleOpenDialog = (network, type) => {
        setSelectedNetwork(network);
        setDialogType(type);
    };

    const handleCloseDialog = () => {
        setSelectedNetwork(null);
        setDialogType(null);
    };


  return (
    <TableContainer component={Paper} sx={{ maxWidth: '55%', marginLeft: 'auto', backgroundColor: '#f5f5f5'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Reseaux</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', color: '#25434d'}} >Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {networks.map((network) => (
            <TableRow key={network.id}>
              <TableCell sx={{fontSize: '18px'}}>{network.name}</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => handleOpenDialog(network, 'view')}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleOpenDialog(network, 'edit')}>
                  <EditIcon />
                </IconButton>
                <IconButton color="success" onClick={() => handleOpenDialog(network, 'add')}>
                  <PersonAddAlt1Icon />
                </IconButton>
                <IconButton color="info" onClick={() => handleOpenDialog(network, 'list')}>
                  <FormatListBulletedIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleOpenDialog(network, 'delete')}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {dialogType === 'view' && (
        <ViewNetworkDialog open={Boolean(dialogType)} onClose={handleCloseDialog} network={selectedNetwork} />
      )}

      {dialogType === 'edit' && (
        <EditNetworkDialog open={Boolean(dialogType)} onClose={handleCloseDialog} network={selectedNetwork} />
      )}

      {dialogType === 'add' && (
        <AddUserToNetwork open={Boolean(dialogType)} onClose={handleCloseDialog} network={selectedNetwork} />
      )}

      {dialogType === 'list' && (
        <ShowNetworkUsers open={Boolean(dialogType)} onClose={handleCloseDialog} network={selectedNetwork} />
      )}

      {dialogType === 'delete' && (
        <DeleteNetworkDialog open={Boolean(dialogType)} onClose={handleCloseDialog} network={selectedNetwork} />
      )}  

    </TableContainer>
  );
};

export default NetworkList;
