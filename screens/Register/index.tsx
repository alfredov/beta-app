import * as React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import registerUser from '../../packages/actions/registerUser';

type Props = typeof dispatch;

const RegisterScreen = ({ register }: Props) => {
  React.useEffect(() => {
    register({ email: 'hw@gmail.com', username: 'howie' });
  }, [register]);

  return <Text>Register</Text>;
};

const dispatch = {
  register: registerUser.request,
};

export default connect(null, dispatch)(RegisterScreen);
