import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import api from './api/api';
import { useEffect, useState } from 'react';

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
    <View style={styles.container}>
      <View>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
