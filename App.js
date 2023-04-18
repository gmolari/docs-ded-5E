import { useEffect, useState } from 'react';

// RN
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import { HomeScreen } from './pages/HomeScreen';

// CONTEXT
import {ContextProvider} from './context/Context';

const Stack = createNativeStackNavigator();

export default function App() {

  const [races, setRaces] = useState([]);

  useEffect(() => {
    // (async ()=>{
    //   await api.get('races').then(response => {
    //     setRaces(response.data.results)
    //     console.log(response.data.results)
    //   })
    // })()
    // console.log(races)
  }, [])

  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
}