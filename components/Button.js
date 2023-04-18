import { Pressable, Text } from 'react-native';

import { styles } from '../utils/style';

export function Button({ buttonTitle, onPress }) {

  return (
    <Pressable style={styles.button} onPress={onPress} >
        <Text style={styles.buttonText} >{buttonTitle.toUpperCase()}</Text>
    </Pressable>
  );
}