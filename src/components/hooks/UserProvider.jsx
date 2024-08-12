import { useState, useEffect, useContext } from 'react';
// import AuthContext from './AuthProvider';
import { handleResponse } from '../../utils/utils';
import { API_BASE_URL } from '../../utils/Constant';


export const UserProvider = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     if (user) {
    //         fetchUserNetworks();
    //     } else {
    //         setLoading(false);
    //     }
    // }, [user]);

    const fetchAllUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/users`, {
                method: "GET",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await handleResponse(response);
            setAllUsers(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        allUsers,
        loading,
        error,
        fetchAllUsers
    };
};
