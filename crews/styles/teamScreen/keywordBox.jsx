import { StyleSheet } from "react-native";

export const keywordBoxStyle = StyleSheet.create({
  layout: {
    marginTop:40,
    borderColor:"#E5E9EF",
    padding:15,
    borderWidth:1,
    borderRadius:13,
    marginLeft:15,
    marginRight:15,
  },
  box: {
    flexDirection:'row',
    marginTop:5
  },
  
  icon:{
    resizeMode: "contain",
    height:20,
    width:20
  },

  boldText:{
    marginLeft:5,
    fontWeight:'bold'
  },

  text:{
    marginLeft:10
  }


})