import { StyleSheet, StatusBar } from "react-native";


export const coachScreenstyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    imageInput: {
      width: 80,
      height: 100,
      marginLeft:10,
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
    layout: { 
    flexDirection: 'row', 
    marginTop: 5
    }
});
  