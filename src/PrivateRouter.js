import React from 'react'
import { Navigate, Outlet } from 'react-router';

const PrivateRouter = ({isLogin}) => {
  return isLogin ? <Outlet /> : <Navigate   to={"/login"}/>
}

export default PrivateRouter;