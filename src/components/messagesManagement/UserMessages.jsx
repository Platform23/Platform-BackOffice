import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  CircularProgress,
  TextField,
  IconButton,
  Box,
  Pagination,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const UserMessages = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 10; // Number of messages per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace with your API call
        // const response = await fetch('/api/users-with-messages');
        // const data = await response.json();

        // Local data for testing
        const data = [
            {
              id: 1,
              name: 'John Doe',
              messages: [
                { id: 1, timestamp: '2024-08-09 10:00 AM', content: 'Hello, how are you?' },
                { id: 2, timestamp: '2024-08-09 10:05 AM', content: 'Let\'s meet up later.' },
              ],
            },
            {
              id: 2,
              name: 'Jane Smith',
              messages: [
                { id: 3, timestamp: '2024-08-09 11:00 AM', content: 'Can you send me the report?' },
                { id: 4, timestamp: '2024-08-09 11:15 AM', content: 'Thank you!' },
              ],
            },
            {
              id: 3,
              name: 'Alice Johnson',
              messages: [
                { id: 5, timestamp: '2024-08-09 09:00 AM', content: 'Good morning!' },
                { id: 6, timestamp: '2024-08-09 09:30 AM', content: 'Please review the document.' },
              ],
            },
        ];
        setUsers(data);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDeleteMessage = (userId, messageId) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId
          ? {
              ...user,
              messages: user.messages.filter(message => message.id !== messageId),
            }
          : user
      )
    );
  };

  const startIndex = (currentPage - 1) * messagesPerPage;
  const paginatedMessages = filteredUsers.slice(startIndex, startIndex + messagesPerPage);

  return (
    <Box sx={{ maxWidth: '55%', marginLeft: 'auto',}}>
      <Box display="flex" mb={2} sx={{ maxWidth: '50%', marginLeft: 'auto',}}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          size="small"
          sx={{ flexGrow: 1 }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {loading && <CircularProgress />}
      {error && (
        <Box display="flex" alignItems="center" color="error.main">
          <ErrorOutlineIcon />
          <Typography variant="body1" ml={1}>{error}</Typography>
        </Box>
      )}

      {!loading && !error && (
        <>
          <List>
            {paginatedMessages.map(user => (
              <React.Fragment key={user.id}>
                <ListItem alignItems="flex-start">
                  <Avatar sx={{marginRight: '10px'}}>{user.name[0]}</Avatar>
                  <ListItemText
                    primary={user.name}
                    secondary={
                      <>
                        {user.messages.map((msg, index) => (
                        <Box
                            key={msg.id}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            mb={1}
                        >
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {msg.timestamp}: {msg.content}
                        </Typography>
                        <IconButton
                            edge="end"
                            aria-label="delete"
                            color='error'
                            onClick={() => handleDeleteMessage(user.id, msg.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                        </Box>
                        ))}
                      </>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </React.Fragment>
            ))}
          </List>
          <Pagination
            count={Math.ceil(filteredUsers.length / messagesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ mt: 2 }}
          />
        </>
      )}
    </Box>
  );
};

export default UserMessages;
