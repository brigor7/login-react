import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Signin: React.FC = () => (
  <View style={styles.container}>
    <Button title="Signin" onPress={() => {}} />
  </View>
);

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
