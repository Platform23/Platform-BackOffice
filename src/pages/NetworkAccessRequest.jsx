import {useState, React} from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NetworkAccessRequestList from '../components/networkManagement/AccessRequestList';

const NetworkAccessRequest = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}>
        <Typography 
            variant="h4"
            sx={{
            marginBottom: '50px',
            marginRight: '-200px',
            color: '#25434d',
            fontWeight: 'bold'
            }}
        >
          Demande d'integration
        </Typography>
        <NetworkAccessRequestList />
    </Layout>
  )
};

export default NetworkAccessRequest;