import {useState, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewNetworkBtn from '../components/networkManagement/newNetworkBtn';

const Networks = () => {
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
          Reseaux
      </Typography>
      <NewNetworkBtn />
    </Layout>
  )
};

export default Networks;