import { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Notification } from '../components/Notification';
import { BackgroundImage } from "../components/BackgroundImage";
import { Button } from "../components/Button";

import SectionButton from "../components/SectionButton";



export function ItemsScreen({ navigation }) {

    const [notify, setNotify] = useState({})

    const { getMagicItems, getEquipCategories } = useContext(Context);

    const magicItems = useQuery({ queryFn: getMagicItems, queryKey: 'items' });
    const categories = useQuery({queryFn: getEquipCategories, queryKey: ['getEquipCategories']})
    
    useEffect(() => {
        if (categories.isLoading && !notify) {
            setNotify({message: 'Loading...', type: 'info'});
        } else {
            setNotify({message: 'Loaded', type: 'success'});
        }
      }, [categories.isLoading]);

    // to find, current magic item  
    const [cMagicItems, setCMagicItems] = useState();
    // to find, current categorie
    const [cCatergorie, setCCategorie] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Notification message={notify?.message} type={notify?.type} />
                    <Button buttonTitle="Back to Home" onPressHandle={() => navigation.navigate("Home")} />
                    <Text style={[styles.title, styles.title_page]} >Magic Items</Text>
                    
                    <SectionButton items={magicItems} textStyle={styles.color_item} buttonStyle={styles.section_item} />

                    <Text style={[styles.title, styles.title_page]} >Categories Of Items</Text>

                    <SectionButton items={categories} textStyle={styles.color_item} buttonStyle={styles.section_item} />
                </View>
            </BackgroundImage>
        </>
    )
}