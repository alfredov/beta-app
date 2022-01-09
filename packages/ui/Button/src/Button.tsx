import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
} from 'react-native';

export type Props = TouchableOpacityProps & {
  variant?: 'primary' | 'error';
};

const Button = ({children, variant = 'primary', ...props}: Props) => (
  <TouchableOpacity
    style={[styles.button, variant === 'error' && styles.errorBackgroundColor]}
    {...props}>
    <Text style={[styles.text, variant === 'error' && styles.errorTextColor]}>
      {children}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  errorBackgroundColor: {
    backgroundColor: '#FFC5C5',
  },
  errorTextColor: {
    color: '#671111',
  },
  button: {
    backgroundColor: '#FF8755',
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 450,
  },
  text: {
    color: '#672A11',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'San Francisco Display',
  },
});

export {Button};
