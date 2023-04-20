import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

export function useFont() {
    const [fontsLoaded] = useFonts({
        'Dungeon': require('../assets/fonts/Dungeon.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare()
    }, []);
    
    if(!fontsLoaded) {
        return null
    } else {
        SplashScreen.hideAsync();
    }
}