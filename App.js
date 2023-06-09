// RN
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import { HomeScreen } from './pages/HomeScreen';
import { RacesScreen } from './pages/RacesScreen';
import { SpellsScreen } from './pages/SpellsScreen';
import { ItemsScreen } from './pages/ItemsScreen';
import { MonstersScreen } from './pages/MonstersScreen';

// CONTEXT
import {ContextProvider} from './context/Context';
import Query from './context/Query';

// Font
import { useFont } from "./hooks/useFont";

const Stack = createNativeStackNavigator();

export default function App() {

  useFont()

  return (
    <NavigationContainer>
      <Query>
        <ContextProvider>
              <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Races" component={RacesScreen} />
                <Stack.Screen name="Spells" component={SpellsScreen} />
                <Stack.Screen name="Items" component={ItemsScreen} />
                <Stack.Screen name="Monsters" component={MonstersScreen} />
              </Stack.Navigator>
          </ContextProvider>
      </Query>
    </NavigationContainer>
  );
}
