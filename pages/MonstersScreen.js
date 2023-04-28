import { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Context } from "../context/Context";

import { Notification } from '../components/Notification';
import { BackgroundImage } from "../components/BackgroundImage";
import { Button } from "../components/Button";

import SectionButton from "../components/SectionButton";


export function MonstersScreen({ navigation }) {

    const [notify, setNotify] = useState({})

    // function to get monsters from api
    const { getMonsters } = useContext(Context);

    // monsters data with request
    const monsters = useQuery({ queryFn: getMonsters, queryKey: 'monsters' });

    useEffect(() => {
        if (monsters.isLoading && !notify) {
            setNotify({message: 'Loading...', type: 'info'});
        } else {
            setNotify({message: 'Loaded', type: 'success'});
        }
      }, [monsters.isLoading]);

    // to find, current monster
    const [cMonsters, setCMonsters] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Notification message={notify?.message} type={notify?.type} />
                    <Button buttonTitle="Back to Home" onPressHandle={() => navigation.navigate("Home")} />
                    <Text style={[styles.title, {marginTop:'2rem'}]} >Monsters down here</Text>
                    <SectionButton items={monsters} textStyle={styles.color_item} buttonStyle={styles.section_item} />
                </View>
            </BackgroundImage>
        </>
    )
}