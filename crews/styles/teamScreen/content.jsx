import { StyleSheet } from "react-native";

export const contentStyle = StyleSheet.create({
  layout: {
    marginTop:30,
    marginLeft:15,
    marginRight:15,
  },
  headLine: {
    fontSize:16,
    fontWeight:'bold',
    marginLeft:10,
    marginTop:5
  },

  boxLayout: {
    flexDirection:'row',
    marginTop:20,
    marginLeft:12,
    marginBottom:15
  },

  lineNumber: {
    fontSize:18,
    fontWeight:'bold'
  },
  title: {
    fontSize:16
  },

  timeIcon: {
    marginTop:3,
    marginRight:5
  },
  
  viewIcon: {
    marginLeft:10,
    marginTop:2
  },

  siteImage: {
    resizeMode: "stretch",
    height:45,
    width:60,
    borderRadius:10,
    marginRight:10
  }



})