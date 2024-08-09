import React from 'react';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import NewUserBtn from '../components/userManagement/NewUserBtn';

const Users = () => (
  <Layout>
    <Typography variant="h4">Utilisateurs</Typography>
    <NewUserBtn />
  </Layout>
);

export default Users;