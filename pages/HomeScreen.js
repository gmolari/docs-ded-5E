import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { useContext, useEffect } from "react";

export function HomeScreen({ navigation }) {

    const {getApi} = useContext(Context);

    useEffect(() => {
        (async ()=>{
            console.log(await getApi('races/elf'))
        })()
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Dungeons and Dragons documentation!</Text>
            <Text style={styles.h2}> 
                Welcome to our documentation, what you want to see? 
            </Text>
        </View>
        // <Button onPress={() => navigation.navigate("Raca")}/>
    )
}