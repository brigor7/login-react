import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './src/context/Auth';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ signed: true }}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
