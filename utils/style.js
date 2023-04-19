import { StyleSheet } from 'react-native';

var font_family = 'Verdana'
var title_color = '#00ced1'
var text_color = '#fff'

export const styles = StyleSheet.create({
    // Geral 
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      // justifyContent: 'center',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
    },
    title: {
      fontSize: '1.5em',
      fontWeight: 'bold',
      fontFamily: font_family,
      color: title_color,
      textAlign: 'center',
      marginBottom: '2rem',
    },
    h2: {
      fontSize: '1.1em',
      textAlign: 'center',
      color: '#fff',
    },
    button: {
      height: '3rem',
      width: '80%',
      backgroundColor: 'transparent',
      border: `2px solid ${title_color}`,
      borderRadius: '5px',
      textAlign: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontFamily: font_family,
      color: title_color,
    },
    // HOME
    container_buttons: {
      flex: 1,
      width: '100%',
      marginTop: '20%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    container_button: {
      marginBottom: '8vh'
    }
})