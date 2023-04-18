import { useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";


export function RacesScreen({ navigation }) {

    const {getApi} = useContext(Context);

    useEffect(() => {
        (async ()=>{
            console.log(await getApi('races/elf'))
        })()
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Races down here</Text>
            <Text style={styles.h2} >races...</Text>
            <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}