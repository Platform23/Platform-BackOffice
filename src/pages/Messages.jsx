import {useState, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import UserList from '../components/userManagement/UserList';
import UserMessages from '../components/messagesManagement/UserMessages';

const Messages = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
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
          Messages
      </Typography>
      <UserMessages />
    </Layout>

  )
};

export default Messages;