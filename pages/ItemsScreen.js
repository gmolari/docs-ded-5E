import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Button } from "../components/Button";


export function ItemsScreen({ navigation }) {

    const {getApi} = useContext(Context);

    // categories data
    const [categories, setCategories] = useState();
    // magic items data
    const [magicItems, setMagicItems] = useState();
    
    // to find, current magic item  
    const [cMagicItems, setCMagicItems] = useState();
    // to find, current categorie
    const [cCatergorie, setCCategorie] = useState();

    useEffect(() => {
        (async ()=>{
            console.log(await getApi('equipment-categories'))
            console.log(await getApi('magic-items'))
        })()
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Items down here</Text>
            <Text style={styles.h2} >items...</Text>
            <Button buttonTitle="Back to Home" onPress={() => navigation.navigate("Home")} />
        </View>
    )
}