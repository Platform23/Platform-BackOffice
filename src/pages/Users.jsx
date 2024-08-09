import {useState, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewUserBtn from '../components/userManagement/NewUserBtn';
import UserList from '../components/userManagement/UserList';

const Users = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const users = [
    { id: 1, username: 'john_doe', email: 'john@example.com' },
    { id: 2, username: 'jane_doe', email: 'jane@example.com' },
    { id: 3, username: 'jake_doe', email: 'jake@example.com' },
    { id: 4, username: 'jim_doe', email: 'jim@example.com' },
    { id: 5, username: 'janny_doe', email: 'janny@example.com' },
  ];
  
  
  return (
    <Layout drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}>
      <Typography 
        variant="h4"
        sx={{
          marginBottom: '50px',
          color: '#25434d',
          fontWeight: 'bold'
        }}
      >
          Utilisateurs
      </Typography>
      <NewUserBtn />
      <UserList 
        users={users}
      />
    </Layout>

  )
};

export default Users;