import { useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { Context } from "../context/Context";

import { Button } from "../components/Button";

import { styles } from "../utils/style";

import { BackgroundImage } from "../components/BackgroundImage";

export function HomeScreen({ navigation }) {

    const {getApi} = useContext(Context);

    useEffect(() => {

    }, [])

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Text style={styles.title} >Dungeons and Dragons documentation!</Text>
                    <Text style={styles.h2}> 
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