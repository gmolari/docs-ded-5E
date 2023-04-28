import { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Notification } from '../components/Notification';
import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";

import SectionButton from "../components/SectionButton";

export function SpellsScreen({ navigation }) {

    const [notify, setNotify] = useState({})

    const {getSpells} = useContext(Context);

    // spells data
    const spells = useQuery({queryFn: getSpells, queryKey: ['getSpells']})

    useEffect(() => {
        if (spells.isLoading && !notify) {
            setNotify({message: 'Loading...', type: 'info'});
        } else {
            setNotify({message: 'Loaded', type: 'success'});
        }
      }, [spells.isLoading]);

    // to find, current spell
    const [cSpell, setCSpell] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Notification message={notify?.message} type={notify?.type} />
                    <Button buttonTitle="Back to Home" onPressHandle={() => navigation.navigate("Home")} />

                    <Text style={[styles.title, {marginTop:'2rem'}]} > Spells down here</Text>

                    <SectionButton items={spells} textStyle={styles.color_item} buttonStyle={styles.section_item} />

                </View>
            </BackgroundImage>
        </>
    )
}