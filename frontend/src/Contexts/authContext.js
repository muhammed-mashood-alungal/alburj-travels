// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null)
  useEffect(() => {
    axios.get('http://localhost:8000/api/auth/user', { withCredentials: true }).then((response) => {
      if (response.data.message) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    }).catch((error) => {
      console.log(error)
      setUser(null)
    })
  })

  const logout = () => {
    const handleLogout = async () => {
      try {
        await axios.get('http://localhost:8000/api/auth/user/logout', { withCredentials: true })
        setIsLoggedIn(false);
      } catch (error) {
        alert(error + 'Error While Log Out')
      }
    };
    handleLogout();
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, user, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
