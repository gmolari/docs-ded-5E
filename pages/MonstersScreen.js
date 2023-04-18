import { useContext, useEffect } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";


export function MonstersScreen({ navigation }) {

    const {getApi} = useContext(Context);

    useEffect(() => {
        (async ()=>{
            console.log(await getApi('races/elf'))
        })()
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Monsters down here</Text>
            <Text style={styles.h2} >monsters...</Text>
            <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}