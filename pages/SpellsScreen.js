import { useContext, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";
import { useQuery } from "react-query";

import SectionButton from "../components/SectionButton";

export function SpellsScreen({ navigation }) {

    const {getSpells} = useContext(Context);

    // spells data
    const spells = useQuery({queryFn: getSpells, queryKey: ['getSpells']})
    // to find, current spell
    const [cSpell, setCSpell] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />

                    <Text style={styles.title} > Spells down here</Text>

                    <SectionButton items={spells} textStyle={styles.colorItem} buttonStyle={styles.sectionItem} />

                </View>
            </BackgroundImage>
        </>
    )
}