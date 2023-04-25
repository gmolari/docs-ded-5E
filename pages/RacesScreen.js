import { useContext, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";

import { Context } from "../context/Context";
import { useQuery } from "react-query";

import SectionButton from "../components/SectionButton";


export function RacesScreen({ navigation }) {

    const {getRaces} = useContext(Context);

    // races data
    const races = useQuery({queryFn: getRaces, queryKey: ['getRaces']})
    // to find, current race
    const [cRace, setCRace] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Button buttonTitle="Back to Home" onPressHandle={() => navigation.navigate("Home")} />
                    <Text style={[styles.title, {marginTop:'2rem'}]} >Races down here</Text>

                    <SectionButton items={races} textStyle={styles.color_item} buttonStyle={styles.section_item} />
                </View>
            </BackgroundImage>
        </>
    )
}