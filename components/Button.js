import { Pressable, Text } from 'react-native';

import { styles } from '../utils/style';

export function Button({ buttonTitle, onPress, style }) {

  return (
    <Pressable style={[styles.button, style?.button && style.button]} onPress={onPress} >
        <Text style={[styles.buttonText, style?.text && style.text]} >{buttonTitle.toUpperCase()}</Text>
    </Pressable>
  );
}