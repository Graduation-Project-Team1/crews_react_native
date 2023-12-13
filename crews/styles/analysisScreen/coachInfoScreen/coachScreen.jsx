import { StyleSheet, StatusBar } from "react-native";


export const coachScreenstyles = StyleSheet.create({
    layout: { 
      flexDirection: 'row', 
      marginTop: 5,
    },
    imageInput: {
      width: 60,
      height: 60,
      marginTop:20,
      marginLeft:10,
      borderRadius:40,
    }, 
    textNumber: {
      marginLeft:20,
      marginTop:40,
      marginRight:10,
      fontSize: 13,
      fontWeight:'bold'
    },
    textInfo: {
      fontSize:13,
      fontWeight:'bold'
    },
    textLayout: {
      marginTop: 20, 
      marginLeft:15 
    },
    boxLayout: {
      flexDirection:'row',
      marginTop:20,
      marginLeft:12
    },
    lineNumber: {
      fontSize:18,
      fontWeight:'bold'
    },
    title: {
      fontWeight:'bold',
      fontSize:16
    },
    timeIcon: {
      marginTop:2,
      marginRight:3
    },
    viewIcon: {
      marginLeft:5,
      marginRight:5,
      marginTop:2
    },
});
  