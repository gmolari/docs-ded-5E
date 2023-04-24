import { StyleSheet } from 'react-native';

var font_family = 'Dungeon'
var title_color = '#dd4214'
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
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: font_family,
      letterSpacing: 2,
      color: title_color,
      textAlign: 'center',
      marginBottom: '2rem',
    },
    titlePage: {
      marginTop: '3rem',
      marginBottom: '1rem'
    },
    subtitle: {
      fontFamily: font_family,
      letterSpacing: 1,
      fontSize: '1.5rem',
      textAlign: 'center',
      color: text_color,
    },
    text: {
      fontFamily: font_family,
      letterSpacing: 1,
      fontSize: '1.5rem',
      textAlign: 'center',
      color: text_color,
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
      fontSize: '1.5rem',
      color: title_color,
    },
    sectionItem: {
      marginTop: '1em'
    },
    colorItem: {
      color: 'blue'
    },
    // HOME
    container_buttons: {
      flex: 1,
      width: '100%',
      marginTop: '10%',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    container_button: {
      marginBottom: '8vh'
    }
})