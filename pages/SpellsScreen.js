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
                    <Button buttonTitle="Back to Home" onPressHandle={() => navigation.navigate("Home")} />

                    <Text style={[styles.title, {marginTop:'2rem'}]} > Spells down here</Text>

                    <SectionButton items={spells} textStyle={styles.color_item} buttonStyle={styles.section_item} />

                </View>
            </BackgroundImage>
        </>
    )
}