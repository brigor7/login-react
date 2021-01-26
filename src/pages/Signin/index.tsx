import React, { useContext } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { signIn } from '../../service/auth';
import AuthContext from '../../context/Auth';

const Signin: React.FC = () => {
  const { signed } = useContext(AuthContext);
  async function handleSignIn() {
    console.log('logar');
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
