import { useContext, useState } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { BackgroundImage } from "../components/BackgroundImage";
import { Button } from "../components/Button";



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
                    <Text style={styles.title} >Monsters down here</Text>
                    <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
                    {
                        monsters.data?.results.map(index => 
                            <Text style={styles.text} key={index.name}>{index.name}</Text>
                        )
                    }
                </View>
            </BackgroundImage>
        </>
    )
}