import { useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { Context } from "../context/Context";

import { Button } from "../components/Button";

import { styles } from "../utils/style";

export function HomeScreen({ navigation }) {

    const {getApi} = useContext(Context);

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Dungeons and Dragons documentation!</Text>
            <Text style={styles.h2}> 
                Welcome to our documentation, what you want to see? 
            </Text>
            <Button buttonTitle="Races" onPress={() => navigation.navigate("Races")} />
            <Button buttonTitle="Spells" onPress={() => navigation.navigate("Spells")} />
            <Button buttonTitle="Items" onPress={() => navigation.navigate("Items")} />
            <Button buttonTitle="Monsters" onPress={() => navigation.navigate("Monsters")} />
        </View>
    )
}