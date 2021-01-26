import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { signIn } from '../../service/auth';

const Signin: React.FC = () => {
  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Button title="Signin" onPress={handleSignIn} />
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
