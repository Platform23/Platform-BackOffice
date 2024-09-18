import { useState, useEffect, useContext } from 'react';
import { handleResponse } from '../../utils/utils';
import { API_BASE_URL } from '../../utils/Constant';


export const UserProvider = () => {
    const [connUser, setConnUser] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [user, setUser] = useState([]);
    const [setDelUser] = useState(null);
    const [userToNetwork, setUserToNetwork] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getUserSession = async () => {
      setLoading(true);
      try {
          const response = await fetch(`${API_BASE_URL}/me`, {
              method: "GET",
              credentials: 'include',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const data = await handleResponse(response);
          setConnUser(data.data);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
    };

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

    const fetchUserInfo = async (uuid) => {
      setLoading(true);
      try {
          const response = await fetch(`${API_BASE_URL}/users/${uuid}`, {
              method: "GET",
              credentials: 'include',
              headers: {
                  'Content-Type': 'application/json',
              },
          });

          const data = await handleResponse(response);
          setUserInfo(data.data);
      } catch (err) {
          setError(err.message);
      } finally {
          setLoading(false);
      }
  };

    const updateUser = async (userData, uid) => {
        try {
          const response = await fetch(`${API_BASE_URL}/users/${uid}`, {
            method: "PUT",
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });
    
          const data = await handleResponse(response);
          setUser(data.data);
        } catch (err) {
          throw err.message;
        }
      };
    
      const deleteUser = async (uid) => {
        try {
          const response = await fetch(`${API_BASE_URL}/users/${uid}`, {
            method: "DELETE",
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(userData),
          });
    
          const data = await handleResponse(response);
          setDelUser(data.data);
        } catch (err) {
          throw err.message;
        }
      };

      const addUserNetwork = async (networkId, userName) => {
        try {
          const response = await fetch(`${API_BASE_URL}/networks/${networkId}/add-user/${userName}`, {
            method: "POST",
            credentials: 'include',
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify(userData),
          });
    
          const data = await handleResponse(response);
          setUserToNetwork(data.data);
        } catch (err) {
          throw err.message;
        }
      };

    return {
        getUserSession,
        connUser,
        allUsers,
        userToNetwork,
        user,
        loading,
        error,
        fetchAllUsers,
        fetchUserInfo,
        userInfo,
        updateUser,
        addUserNetwork,
        deleteUser
    };
};
