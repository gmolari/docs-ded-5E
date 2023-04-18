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
      justifyContent: 'center',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: title_color,
    },
})