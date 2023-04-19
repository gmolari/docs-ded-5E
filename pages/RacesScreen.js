import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";


export function RacesScreen({ navigation }) {

    const {getApi} = useContext(Context);

    // races data
    const [races, setRaces] = useState();
    // to find, current race
    const [cRace, setCRace] = useState();

    useEffect(() => {
        (async ()=>{
            setRaces(await getApi('races/'))
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