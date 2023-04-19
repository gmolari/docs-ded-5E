import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";


export function SpellsScreen({ navigation }) {

    const {getApi} = useContext(Context);

    // spells data
    const [spells, setSpells] = useState();
    // to find, current spell
    const [cSpell, setCSpell] = useState();

    useEffect(() => {
        (async ()=>{
            console.log(await getApi('spells'))
        })()
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Spells down here</Text>
            <Text style={styles.h2} >spells...</Text>
            <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}