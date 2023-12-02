import { StyleSheet } from "react-native";

export const todayScheduleBoxStyle = StyleSheet.create({
    layout: {
        backgroundColor:'#FFC300',
        padding:12,
        borderWidth:1,
        borderRadius:13,
        borderColor:'#FFC300',
        marginLeft:10,
        marginRight:10,
    },
    liveTextBox:{
        fontSize:10,
        fontWeight:'bold',
        borderRadius:5,
        backgroundColor:'#FF0000',
        color:'white',
        width:40,
        paddingTop:2,
        paddingBottom:2,
        textAlign:'center'
    },
    liveBox:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    liveTalkBox:{
        flexDirection:'row',
        marginTop:10,
        borderRadius:5,
        backgroundColor:'white',
        height:25,
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },
    sizeImage: {
        marginRight:10,
        resizeMode: "stretch",
        height:55,
        width:55,
        borderRadius:10
    }
})