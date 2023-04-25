import { View, Text } from "react-native";

import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";

import { styles } from "../utils/style";

export function HomeScreen({ navigation }) {

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Text style={styles.title} >Dungeons and Dragons documentation!</Text>
                    <Text style={styles.subtitle}> 
                        Welcome to our documentation, what you want to see? 
                    </Text>
                    <View style={styles.container_buttons} >
                        <Button buttonTitle="Races" onPressHandle={() => navigation.navigate("Races")} style={{button: styles.container_button}} />
                        <Button buttonTitle="Spells" onPressHandle={() => navigation.navigate("Spells")} style={{button: styles.container_button}} />
                        <Button buttonTitle="Items" onPressHandle={() => navigation.navigate("Items")} style={{button: styles.container_button}} />
                        <Button buttonTitle="Monsters" onPressHandle={() => navigation.navigate("Monsters")} style={{button: styles.container_button}} />
                    </View>
                </View>
            </BackgroundImage>
        </>
    )
}