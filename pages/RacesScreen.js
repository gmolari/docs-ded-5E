import { useContext, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";

import { Context } from "../context/Context";



export function RacesScreen({ navigation }) {

    const {getApi} = useContext(Context);

    // races data
    const [races, setRaces] = useState();
    // to find, current race
    const [cRace, setCRace] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Text style={styles.title} >Races down here</Text>
                    <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
                </View>
            </BackgroundImage>
        </>
    )
}