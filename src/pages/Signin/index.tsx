import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/Auth';

const Signin: React.FC = () => {
  const { signIn } = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
