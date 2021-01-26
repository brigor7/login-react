import React from 'react';
import '../pages/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

const AuthStack = createStackNavigator();

const AuthApp: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Dashboard" component={Dashboard} />
  </AuthStack.Navigator>
);

export default AuthApp;
