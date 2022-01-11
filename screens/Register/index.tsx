import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import registerUser from '../../packages/actions/registerUser';
import * as selector from '../../packages/selectors';
import { HOME_SCREEN } from '../../navigation';

import { TextInput } from '@bits-x/text-input';
import { Button } from '@bits-x/button';

type Props = typeof dispatch & ReturnType<typeof mapStateToProps>;

const RegisterScreen = ({ register, loading, user }: Props) => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');

  React.useEffect(() => {
    if (user) {
      // @ts-ignore
      navigation.navigate(HOME_SCREEN);
    }
  }, [user, navigation]);

  const registerHandler = () => {
    if (username.length > 0 && email.length > 0) {
      register({ email, username });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Regístrate</Text>
        <TextInput
          editable={!loading}
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.textInput}
          placeholder="Nombre de usuario"
        />
        <TextInput
          editable={!loading}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.textInput}
          placeholder="Correo eletrónico"
        />
        <TextInput
          editable={!loading}
          style={styles.textInput}
          placeholder="Contraseña"
          secureTextEntry
        />
      </ScrollView>
      <Button disabled={loading} onPress={registerHandler}>
        {loading ? 'Creando Cuenta ...' : 'Crear Cuenta'}
      </Button>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  loading: selector.registerUser(state).loading,
  loaded: selector.registerUser(state).loaded,
  error: selector.registerUser(state).error,
  user: selector.registerUser(state).data,
});

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
  text: {
    fontFamily: 'System',
    marginBottom: 48,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
});

export default connect(mapStateToProps, dispatch)(RegisterScreen);
