import { useContext, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";


export function SpellsScreen({ navigation }) {

    const {getApi} = useContext(Context);

    // spells data
    const [spells, setSpells] = useState();
    // to find, current spell
    const [cSpell, setCSpell] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Text style={styles.title} >Spells down here</Text>
                    <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
                </View>
            </BackgroundImage>
        </>
    )
}