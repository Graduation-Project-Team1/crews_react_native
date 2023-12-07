import { StyleSheet } from "react-native";

export const liveChatBoxStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:5
    },
    messageList: {
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        
    },
    layout: {
        borderColor:"#E5E9EF",
        padding:15,
        borderWidth:1,
        borderRadius:13,
        marginLeft:15,
        marginRight:15,
      },
    imageInput: {
        width: 50,
        height: 50,
        marginTop:20,
        marginLeft:20,
        borderRadius:40,
    }, 
    chattingBox:{
        backgroundColor:'#F5F5F5',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#F5F5F5',
        marginLeft:10, 
        marginTop:5,
        alignSelf:'flex-start'
    },
    myChattingBox:{
        backgroundColor:'#D6E3FF',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#D6E3FF',
        marginTop:5,
        alignSelf:'flex-end'
    },
    ChattingView:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginRight:20
    }
})