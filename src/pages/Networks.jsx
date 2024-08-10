import {useState, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewNetworkBtn from '../components/networkManagement/newNetworkBtn';
import NetworkList from '../components/networkManagement/NetworkList';

const Networks = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const networks = [
    { id: 1, networkName: 'Fablabs', description: 'Reseau Fablab' },
    { id: 2, networkName: 'Hackerspaces', description: 'Reseau hackerspace' },
    { id: 3, networkName: 'Makerspaces', description: 'Reseau mackerspace' },
    { id: 4, networkName: 'Artisans', description: 'Reseau artisans...' },
    { id: 5, networkName: 'Education', description: 'Reseau eduction' },
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
          Reseaux
      </Typography>
      <NewNetworkBtn />
      <NetworkList 
        networks={networks}
      />
    </Layout>
  )
};

export default Networks;