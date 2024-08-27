import React, { useState, useEffect } from 'react';
import {
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button
} from '@mui/material';

const NetworkAccessRequestList = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Fetch data from API or use static data
        const fetchData = async () => {
            // Replace with API call
            const data = [
                { id: 1, username: 'JohnDoe', network: 'Fablab', requestDate: '2024-08-10', status: 'En attente' },
                { id: 2, username: 'JaneSmith', network: 'Makerspace', requestDate: '2024-08-09', status: 'En attente' },
            
            ];
            setRequests(data);
        };
        
        fetchData();
    }, []);
    
    const handleApprove = (id) => {
        // Handle approve action
        console.log(`Request ${id} approved`);
    };

    const handleDeny = (id) => {
        // Handle deny action
        console.log(`Request ${id} denied`);
    };

    return (
        <TableContainer component={Paper} sx={{ maxWidth: '55%', marginLeft: 'auto', backgroundColor: '#f5f5f5'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Pseudo</TableCell>
                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Reseau</TableCell>
                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Date</TableCell>
                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Status</TableCell>
                        <TableCell sx={{fontWeight: 'bold', color: '#25434d'}}>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {requests.map((request) => (
                        <TableRow key={request.id}>
                        <TableCell>{request.username}</TableCell>
                        <TableCell>{request.network}</TableCell>
                        <TableCell>{request.requestDate}</TableCell>
                        <TableCell>{request.status}</TableCell>
                        <TableCell>
                            <Button variant="contained" color="success" onClick={() => handleApprove(request.id)}>
                                Approuver
                            </Button>
                            <Button variant="contained" color="error" onClick={() => handleDeny(request.id)} style={{ marginLeft: 10 }}>
                                Refuser
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default NetworkAccessRequestList