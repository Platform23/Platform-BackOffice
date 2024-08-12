import {useState, useEffect, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewUserBtn from '../components/userManagement/NewUserBtn';
import UserList from '../components/userManagement/UserList';
import { UserProvider } from '../components/hooks/UserProvider';

const Users = () => {
  const { allUsers, fetchAllUsers } = UserProvider();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllUsers(); // Fetch the networks when the component mounts
  }, []);

  // const users = [
  //   { id: 1, username: 'john_doe', email: 'john@example.com', profiles: ["Volontaire / Bénévole", "Logisticien.ne"] },
  //   { id: 2, username: 'jane_doe', email: 'jane@example.com' },
  //   { id: 3, username: 'jake_doe', email: 'jake@example.com' },
  //   { id: 4, username: 'jim_doe', email: 'jim@example.com' },
  //   { id: 5, username: 'janny_doe', email: 'janny@example.com' },
  // ];
  
  
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
      {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">Failed to load users: {error}</Typography>
        ) : (
          <UserList 
            users={allUsers}
          />
        )}
      
    </Layout>

  )
};

export default Users;