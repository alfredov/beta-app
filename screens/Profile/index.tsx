import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { Button } from '@bits-x/button';
import { useNavigation } from '@react-navigation/native';

import * as selectors from '../../packages/selectors';
import logoutAction from '../../packages/actions/logoutUser';
import { REGISTER_SCREEN } from '../../navigation';
import styles from './styles';

type Props = ReturnType<typeof mapStateToProps> &
  typeof dispatchToProps & { reset: () => void };

const ProfileScreen = ({ user, loaded, loading, logout, reset }: Props) => {
  const navigation = useNavigation();

  React.useEffect(() => reset, [reset]);

  React.useEffect(() => {
    if (loaded) {
      // @ts-ignore
      navigation.navigate(REGISTER_SCREEN);
    }
  }, [navigation, loaded]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.avatar} />
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Nombre de usuario</Text>
          <Text style={[styles.infoTitle, styles.info]}>{user?.username}</Text>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Correo electrónico</Text>
          <Text style={[styles.infoTitle, styles.info]}>{user?.email}</Text>
        </View>
      </ScrollView>
      <Button disabled={loading} variant="error" onPress={logout}>
        {loading ? 'Cerrando Sesión ...' : 'Cerrar Sesión'}
      </Button>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  user: selectors.registerUser(state).data,
  loading: selectors.logoutUser(state).loading,
  loaded: selectors.logoutUser(state).loaded,
});

const dispatchToProps = {
  logout: logoutAction.request,
  reset: logoutAction.cancel,
};

export default connect(mapStateToProps, dispatchToProps)(ProfileScreen);
