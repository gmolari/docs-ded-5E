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
    title_page: {
      marginTop: '2rem',
      marginBottom: '2rem'
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
    button_pressed: {
      backgroundColor: title_color,
      border: `2px solid ${title_color}`,
      transitionDuration: '100ms',
    },
    button_text: {
      fontFamily: font_family,
      fontSize: '1.5rem',
      color: title_color,
    },
    button_text_pressed: {
      color: text_color,
    },
    section_item: {
      marginTop: '1em'
    },
    color_item: {
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