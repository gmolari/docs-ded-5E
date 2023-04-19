import { ImageBackground, StyleSheet } from "react-native";

import image from '../assets/wallpaper.jpg'

export function BackgroundImage({ children }) {
    return (
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            {children}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: 'center',
    }
})