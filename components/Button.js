import { useEffect, useState, useRef } from 'react';
import { Pressable, Text } from 'react-native';

import { styles } from '../utils/style';

export function Button({ buttonTitle, onPressHandle, style }) {

  const [pressed, setPressed] = useState(false)
  const buttonRef = useRef(null);

  function onPressInHandle() {
    setPressed(!pressed)
  }

  // Reset button style
  useEffect(() => {
    const button = buttonRef.current;

    button.addEventListener('focus', () => {
      setPressed(false)
    });
  }, [])

  return (
    <Pressable style={[styles.button, style?.button && style.button, pressed && styles.button_pressed]} onPress={onPressHandle} onPressIn={onPressInHandle} ref={buttonRef} >
        <Text style={[styles.button_text, style?.text && style.text, pressed && styles.button_text_pressed]} >{buttonTitle.toUpperCase()}</Text>
    </Pressable>
  );
}