import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View, ScrollView } from 'react-native';
import { Button } from '@bits-x/button';

import { registerUser } from '../../packages/selectors';
import styles from './styles';

type Props = ReturnType<typeof mapStateToProps>;

const ProfileScreen = ({ user }: Props) => (
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
    <Button variant="error">Cerrar Sesión</Button>
  </View>
);

const mapStateToProps = (state: any) => ({ user: registerUser(state).data });

export default connect(mapStateToProps, null)(ProfileScreen);
