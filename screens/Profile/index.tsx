import * as React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

import { registerUser } from '../../packages/selectors';

type Props = ReturnType<typeof mapStateToProps>;

const ProfileScreen = ({ user }: Props) => <Text>Profile {user?.id}</Text>;

const mapStateToProps = (state: any) => ({ user: registerUser(state).data });

export default connect(mapStateToProps, null)(ProfileScreen);
