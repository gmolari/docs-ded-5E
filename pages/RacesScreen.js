import { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { useQuery } from "react-query";

import { styles } from "../utils/style";

import { Notification } from '../components/Notification';
import { Button } from "../components/Button";
import { BackgroundImage } from "../components/BackgroundImage";

import { Context } from "../context/Context";

import SectionButton from "../components/SectionButton";


export function RacesScreen({ navigation }) {

    const [notify, setNotify] = useState({})

    const {getRaces} = useContext(Context);

    // races data
    const races = useQuery({queryFn: getRaces, queryKey: ['getRaces']})

    useEffect(() => {
        if (races.isLoading && !notify) {
            setNotify({message: 'Loading...', type: 'info'});
        } else {
            setNotify({message: 'Loaded', type: 'success'});
        }
      }, [races.isLoading]);

    // to find, current race
    const [cRace, setCRace] = useState();

    return (
        <>
            <BackgroundImage>
                <View style={styles.container} >
                    <Notification message={notify?.message} type={notify?.type} />
                    <Button buttonTitle="Back to Home" onPressHandle={() => navigation.navigate("Home")} />
                    <Text style={[styles.title, {marginTop:'2rem'}]} >Races down here</Text>

                    <SectionButton items={races} textStyle={styles.color_item} buttonStyle={styles.section_item} />
                </View>
            </BackgroundImage>
        </>
    )
}