import React from 'react';
import '../pages/Signin';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../pages/Signin';

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Signin" component={Signin} />
  </AppStack.Navigator>
);

export default AppRoutes;
