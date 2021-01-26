import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AuthContext from '../../context/Auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useContext(AuthContext);
  function handleSignout() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.bold}>{user?.name}</Text>
      <Button title="Sign out" onPress={handleSignout} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
});
