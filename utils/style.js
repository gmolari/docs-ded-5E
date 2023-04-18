import { StyleSheet } from 'react-native';

var font_family = 'Verdana'
var title_color = '#00ced1'
var text_color = '#fff'

export const styles = StyleSheet.create({
    // Geral 
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      paddingTop: '2em'
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: title_color,
      textAlign: 'center'
    },
    h2: {
      fontSize: '1.1em',
      textAlign: 'center'
    }
})