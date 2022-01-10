import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';

import SendIcon from './SendIcon';

type AsIcon = 'send';
export type Props = TouchableOpacityProps & { as?: AsIcon };

const getIcon = (icon: AsIcon) => (icon === 'send' ? <SendIcon /> : null);

const IconButton = ({ children, as, disabled, ...props }: Props) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.button, disabled && styles.disabled]}
    {...props}>
    {as ? getIcon(as) : children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF8755',
    height: 56,
    width: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: '#C4C4C4',
  },
});

export { IconButton };
