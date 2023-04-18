import { useEffect, useState } from 'react';

// RN
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// API
import api from './utils/api';

// Pages
import { HomeScreen } from './pages/HomeScreen';

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}