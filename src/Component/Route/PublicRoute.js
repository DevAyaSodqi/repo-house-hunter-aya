import React, { useContext } from 'react';
import { Route, Routes, redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



import AuthContext from '../../Context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function PublicRoute({ component: Component, ...rest }) {
  const { isAuth, authLoading } = useContext(AuthContext);
  
  // const navigate = useNavigate();

 


  return   !isAuth && !authLoading ? <Outlet /> : <Navigate to="/" />;
}
PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PublicRoute;