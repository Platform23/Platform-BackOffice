import {useState, useEffect, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewUserBtn from '../components/userManagement/NewUserBtn';
import UserList from '../components/userManagement/UserList';
import { UserProvider } from '../components/hooks/UserProvider';

const Users = () => {
  const { connUser, getUserSession } = UserProvider();
  const { allUsers, fetchAllUsers } = UserProvider();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllUsers(); // Fetch the networks when the component mounts
    getUserSession();
  }, []);
  
  
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

      {connUser.role !== 2 && (
        <>  
          <NewUserBtn />
        </>
      )}

      {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">Failed to load users: {error}</Typography>
        ) : (
          <UserList 
            users={allUsers}
            session={connUser}
          />
        )}
      
    </Layout>

  )
};

export default Users;