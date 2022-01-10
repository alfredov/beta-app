import * as React from 'react';
import {
  TextInput as PrimitiveTextInput,
  TextInputProps,
  StyleSheet,
} from 'react-native';

export type Props = TextInputProps & { variant?: 'inline' };

const TextInput = ({ variant, ...props }: Props) => (
  <PrimitiveTextInput
    placeholderTextColor={variant === 'inline' ? '#4B5959' : '#00000075'}
    style={[styles.input, variant === 'inline' && styles.shadow]}
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 64,
    backgroundColor: '#F0F6FA',
    borderRadius: 32,
    color: '#000',
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '400',
    paddingLeft: 24,
    paddingRight: 24,
  },
  shadow: {
    shadowColor: '#00000043',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

export { TextInput };
