# icon-button
Icon button for react-native.
Icons available so far:
- Send icon
![Screen Shot 2022-01-10 at 10 12 54 AM](https://user-images.githubusercontent.com/4967157/148780205-7dd95031-9534-4e3a-8f80-7e0dbd142b36.png)

## Installation
```bash
$ yarn add @bits-x/icon-button
```

## Usage
```js
import { IconButton } from '@bits-x/icon-button';

<View>
  <IconButton as="send" onPress={() => {}} />
  <IconButton onPress={() => {}}>
    <Text>🦄</Text>
  </IconButton>
</View>

```