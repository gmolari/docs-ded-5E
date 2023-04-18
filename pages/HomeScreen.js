import { View, Text } from "react-native";

import { styles } from "../utils/style";

export function HomeScreen({ navigation }) {
    return (
        <View style={styles.container} >
            <Text style={styles.title} >Olá</Text>
        </View>
    )
}