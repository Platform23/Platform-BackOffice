import { createContext, useState, useEffect } from 'react';
import Loader from '../loaders/Loader';
import { handleResponse } from '../../utils/utils';
import { API_BASE_URL } from '../../utils/Constant';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/me`, {
          credentials: 'include',
        });

        const data = await handleResponse(response);
        setUser(data.data);
      } catch (err) { /* empty */ } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Determine if identifier is an email or pseudo
          ...(
            credentials.identifier.includes('@')
              ? { email: credentials.identifier }
              : { pseudo: credentials.identifier }
          ),
          password: credentials.password,
        }),
      });

      const data = await handleResponse(response);
      setUser(data.data);
      return data.data
    } catch (err) {
      console.log(err.message)
      throw err.message;
    }
  };

  const register = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: "POST",
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

  const logout = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await handleResponse(response);
      setUser(null);
    } catch (err) {
      throw err.message;
    }
  };

  const forgotPassword = async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      await handleResponse(response);
    } catch (err) {
      throw err.message;
    }
  };

  const resetPassword = async (token, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/reset-password/${token}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await handleResponse(response);
      setUser(data.data);
    } catch (err) {
      throw err.message;
    }
  };

  if (loading) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, forgotPassword, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

