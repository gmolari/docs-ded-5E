import { Pressable, Text } from 'react-native';

import { styles } from '../utils/style';

export function Button({ buttonTitle, onPress, style }) {

  return (
    <Pressable style={[styles.button, style && style]} onPress={onPress} >
        <Text style={styles.buttonText} >{buttonTitle.toUpperCase()}</Text>
    </Pressable>
  );
}