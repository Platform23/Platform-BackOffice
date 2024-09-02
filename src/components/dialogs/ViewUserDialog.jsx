import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import { UserProvider } from '../hooks/UserProvider';

const ViewUserDialog = ({ open, onClose, user }) => {
  const { userInfo, fetchUserInfo } = UserProvider();
  const [loading, setLoading] = useState(true);
  // Hook to store a flag to ensure the effect only runs once per dialog open
  const fetched = useRef(false);

  useEffect(() => {
    if (open && !fetched.current) {
        const fetchData = async () => {
        setLoading(true);
        await fetchUserInfo(user.uuid);
        setLoading(false);
        // Mark as fetched to prevent re-fetching
        fetched.current = true; 
      };
      fetchData();
    }
  }, [open, user.uuid, fetchUserInfo]);

  // Reset the `fetched` flag when the dialog closes to allow re-fetching if reopened
  useEffect(() => {
    if (!open) {
      fetched.current = false;
    }
  }, [open]);

  if (loading) {
    return <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontSize: '25px', color: '#25434d', fontWeight: 'bold', marginLeft: '20px' }}>Details</DialogTitle>
      <DialogContent>
        <p>Chargement...</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant='contained' sx={{ backgroundColor: '#969696' }}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>;
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontSize: '25px', color: '#25434d', fontWeight: 'bold', marginLeft: '20px' }}>Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ padding: '20px' }}>
          <Grid item xs={6}>
            <TextField
              label="Nom complet"
              value={userInfo?.fullName || ''}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Pseudo"
              value={userInfo?.pseudo || ''}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              value={userInfo?.email || ''}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Profession"
              value={userInfo?.profession || ''}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Rôle"
              value={userInfo?.role === 3 ? 'Administrateur' : 'Utilisateur'}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Compétences"
              value={userInfo?.competences?.map((compt) => compt.name).join('\n') || 'Aucune compétence'}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Profile"
              value={userInfo?.profiles?.map((prof) => prof.name).join('\n') || 'Aucun profile'}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Communauté d'appartenance"
              value={userInfo?.communities?.map((commun) => commun.name).join('\n') || 'Aucune communauté'}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Expériences"
              value={userInfo?.experiences?.map((exp) => `${exp.title} à ${exp.organization}`).join('\n') || 'Aucune expérience'}
              fullWidth
              InputProps={{ readOnly: true }}
              variant="outlined"
              multiline
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant='contained' sx={{ backgroundColor: '#969696' }}>
          Fermer
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewUserDialog;
