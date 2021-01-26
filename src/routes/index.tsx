import React, { useContext } from 'react';
import AuthContext from '../context/Auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed } = useContext(AuthContext);
  console.log(signed);
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
