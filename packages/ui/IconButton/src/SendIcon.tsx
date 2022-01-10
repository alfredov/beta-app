import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const SendIcon = (props: SvgProps) => (
  <Svg width={32} height={28} fill="none" {...props}>
    <Path
      d="M30.094 11.106 4.276.242a3.04 3.04 0 0 0-3.207.525A3.143 3.143 0 0 0 .097 3.91l2.299 9.14h11.251c.518 0 .938.425.938.95 0 .525-.42.95-.938.95H2.396L.097 24.09a3.143 3.143 0 0 0 .972 3.143 3.04 3.04 0 0 0 3.207.525l25.818-10.864C31.27 16.4 32 15.291 32 14c0-1.29-.73-2.4-1.906-2.894Z"
      fill="#fff"
    />
  </Svg>
);

export default SendIcon;
