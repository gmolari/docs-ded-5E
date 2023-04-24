import { useContext, useState } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { BackgroundImage } from "../components/BackgroundImage";
import { Button } from "../components/Button";

import SectionButton from "../components/SectionButton";



export function ItemsScreen({ navigation }) {

    const { getMagicItems, getEquipCategories } = useContext(Context);

    const magicItems = useQuery({ queryFn: getMagicItems, queryKey: 'items' });
    const categories = useQuery({queryFn: getEquipCategories, queryKey: ['getEquipCategories']})
    
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
                    <Text style={[styles.title, styles.titlePage]} >Magic Items</Text>
                    
                    <SectionButton items={magicItems} textStyle={styles.colorItem} buttonStyle={styles.sectionItem} />

                    <Text style={[styles.title, styles.titlePage]} >Categories Of Items</Text>

                    <SectionButton items={categories} textStyle={styles.colorItem} buttonStyle={styles.sectionItem} />
                </View>
            </BackgroundImage>
        </>
    )
}