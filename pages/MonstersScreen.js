import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";

import { useQuery, useQueryClient, useMutation } from "react-query";

export function MonstersScreen({ navigation }) {
    // function to get monsters from api
    const {getMonsters} = useContext(Context);

    // monsters data with request
    const monsters = useQuery({queryFn: getMonsters, queryKey: 'teste'});
    
    // to find, current monster
    const [cMonsters, setCMonsters] = useState();

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Monsters down here</Text>
            <Text style={styles.h2} >monsters...</Text>
            <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
            {
                monsters.data?.results.map(index => 
                    <Text key={index.name}> {index.name} </Text>
                )
            }
        </View>
    )
}