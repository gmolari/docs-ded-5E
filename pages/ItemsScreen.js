import { useContext, useState } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { BackgroundImage } from "../components/BackgroundImage";
import { Button } from "../components/Button";



export function ItemsScreen({ navigation }) {

    const { getMagicItems } = useContext(Context);

    const magicItems = useQuery({ queryFn: getMagicItems, queryKey: 'items' });
    
    // to find, current magic item  
    const [cMagicItems, setCMagicItems] = useState();
    // to find, current categorie
    const [cCatergorie, setCCategorie] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Text style={styles.title} >Items down here</Text>
                    <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
                    {
                        magicItems.data?.results.map(index => 
                            <Text style={styles.text} key={index.name}>{index.name}</Text>
                        )
                    }
                </View>
            </BackgroundImage>
        </>
    )
}