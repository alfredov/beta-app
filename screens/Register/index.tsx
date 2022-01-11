import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import registerUser from '../../packages/actions/registerUser';

import { TextInput } from '@bits-x/text-input';
import { Button } from '@bits-x/button';

type Props = typeof dispatch;

const RegisterScreen = ({ register }: Props) => {
  React.useEffect(() => {
    register({ email: 'hw@gmail.com', username: 'howie' });
  }, [register]);

  return (
    <View style={styles.container}>
      <View>
        <Text>Regístrate</Text>
        <TextInput placeholder="Nombre de usuario" />
        <TextInput placeholder="Correo eletrónico" />
        <TextInput placeholder="Contraseña" />
      </View>
      <Button>Crear Cuenta</Button>
    </View>
  );
};

const dispatch = {
  register: registerUser.request,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 24,
    justifyContent: 'space-between',
  },
  textInput: {
    marginBottom: 12,
  },
});

export default connect(null, dispatch)(RegisterScreen);
