import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState();
  const [authLoading, setAuthLoading] = useState(false);
  

  const [user, setUser] = useState([]);
  // const getUser = async () => {
  //     const response = await fetch("https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house");
  //     const FinalData = await response.json();
  //     setUser(FinalData)
  // }

  const login = (userData)=>{
      setUser(userData); 
      setIsAuth(true);

  }
    const logout = ()=>{
      setUser(null); 
      setIsAuth(false);

  }



  useEffect(() => {
    (async () => {
      try {
        // setError(null);
        // setAuthLoading(true);
        // const response = await fetch("https://my-json-server.typicode.com/DevAyaSodqi/mock-api/house",user);
        // const FinalData = await response.json();
        // getUser(FinalData)
        // setIsAuth(true);

        setAuthLoading(false);
      } catch (err) {
        setAuthLoading(false);
        if (err.response.status === 401) {
          setIsAuth(false);
        } else {
          setError(
            err.response ? err.response.data.message : 'internal server error'
          );
        }
      }
    })();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, authLoading, error ,login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.func.isRequired,
};
export default AuthProvider;