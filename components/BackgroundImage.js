import { Image, ScrollView } from "react-native";

import image from '../assets/wallpaper.jpg'

export function BackgroundImage({ children }) {
    return (
        <>
            <Image
                source={image}
                style={{position:'absolute',
                        left:0, 
                        right:0, 
                        top:0,
                        bottom:0}}
            />
            <ScrollView 
                style={{backgroundColor:'#0000009c',
                        position:'absolute',
                        left:0,
                        right:0,
                        top:0,
                        bottom:0}}
            >
                {children}
            </ScrollView>
        </>
    )
}