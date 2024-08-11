import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewNetworkBtn from '../components/networkManagement/newNetworkBtn';
import NetworkList from '../components/networkManagement/NetworkList';
import { useNetworks } from '../components/hooks/NetworkProvider'

const Networks = () => {
  const { allNetworks, fetchAllNetworks } = useNetworks();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [networks, setNetworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // const networks = [
  //   { id: 1, networkName: 'Fablabs', description: 'Reseau Fablab' },
  //   { id: 2, networkName: 'Hackerspaces', description: 'Reseau hackerspace' },
  //   { id: 3, networkName: 'Makerspaces', description: 'Reseau mackerspace' },
  //   { id: 4, networkName: 'Artisans', description: 'Reseau artisans...' },
  //   { id: 5, networkName: 'Education', description: 'Reseau eduction' },
  // ];

  // useEffect(() => {
  //   const loadNetworks = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await fetchAllNetworks(); // Fetch the networks
  //       setNetworks(response.data); // Assuming the response contains the network data
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadNetworks();
  // }, []);

  useEffect(() => {
    fetchAllNetworks(); // Fetch the networks when the component mounts
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
          Reseaux
      </Typography>
      <NewNetworkBtn />
        {loading ? (
          <Typography>Loading...</Typography>
        ) : error ? (
          <Typography color="error">Failed to load networks: {error}</Typography>
        ) : (
          <NetworkList 
            networks={allNetworks}
          />
        )}
    </Layout>
  )
};

export default Networks;