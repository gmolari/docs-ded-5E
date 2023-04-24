import { useContext, useState } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { BackgroundImage } from "../components/BackgroundImage";
import { Button } from "../components/Button";

import SectionButton from "../components/SectionButton";


export function MonstersScreen({ navigation }) {
    // function to get monsters from api
    const { getMonsters } = useContext(Context);

    // monsters data with request
    const monsters = useQuery({ queryFn: getMonsters, queryKey: 'monsters' });
    
    // to find, current monster
    const [cMonsters, setCMonsters] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
                    <Text style={styles.title} >Monsters down here</Text>

                    <SectionButton items={monsters} textStyle={styles.colorItem} buttonStyle={styles.sectionItem} />
                </View>
            </BackgroundImage>
        </>
    )
}