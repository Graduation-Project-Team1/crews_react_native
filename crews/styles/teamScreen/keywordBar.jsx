import { StyleSheet } from "react-native";

export const keywordBarStyle = StyleSheet.create({
  layout: {
    flexDirection: 'row'
  },

  front: {
    height:1000,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10
  },

  firstText: {
    marginLeft:35,
    marginTop:50,
    marginBottom:5
  },
  firstBar: {
    marginLeft:30,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor: "#224F85",
    height: 120,
    width:20
  },

  secondText: {
    marginLeft:65,
    marginTop:70,
    marginBottom:5
  },
  secondBar: {
    marginLeft:60,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor: "#FFC300", 
    height: 100,
    width:20
  },

  thirdText: {
    marginLeft:60,
    marginTop:110,
    marginBottom:5
  },
  thirdBar: {
    marginLeft:55,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor: "#125A37", 
    height: 60,
    width:20
  },

  fourthText: {
    marginLeft:65,
    marginTop:130,
    marginBottom:5
  },
  fourthBar: {
    marginLeft:60,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor: "#D6E3FF", 
    height: 40,
    width:20
  },

  fifthText: {
    marginLeft:60,
    marginTop:150,
    marginBottom:5
  },
  fifthBar: {
    marginLeft:55,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor: "#FBEEAC", 
    height: 20,
    width:20
  }
})