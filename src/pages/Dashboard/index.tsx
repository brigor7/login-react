import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import AuthContext from '../../context/Auth';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext);
  function handleSignout() {
    signOut();
  }
  return (
    <View style={styles.container}>
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
});
