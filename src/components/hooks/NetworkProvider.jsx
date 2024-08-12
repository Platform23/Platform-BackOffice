import { useState, useEffect, useContext } from 'react';
import AuthContext from './AuthProvider';
import { handleResponse } from '../../utils/utils';
import { API_BASE_URL } from '../../utils/Constant';


export const useNetworks = () => {
    const [userNetworks, setUserNetworks] = useState([]);
    const [allNetworks, setAllNetworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            fetchUserNetworks();
        } else {
            setLoading(false);
        }
    }, [user]);

    const fetchUserNetworks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/networks/user-networks`, {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleResponse(response);
            setUserNetworks(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAllNetworks = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/networks`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleResponse(response);
            setAllNetworks(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        userNetworks,
        allNetworks,
        loading,
        error,
        fetchAllNetworks
    };
};