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
                        <Button buttonTitle="Races" onPress={() => navigation.navigate("Races")} style={styles.container_button} />
                        <Button buttonTitle="Spells" onPress={() => navigation.navigate("Spells")} style={styles.container_button} />
                        <Button buttonTitle="Items" onPress={() => navigation.navigate("Items")} style={styles.container_button} />
                        <Button buttonTitle="Monsters" onPress={() => navigation.navigate("Monsters")} style={styles.container_button} />
                    </View>
                </View>
            </BackgroundImage>
        </>
    )
}