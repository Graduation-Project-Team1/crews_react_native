import React,{useContext} from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from 'react-native';
import ExceptIcon from '../../components/analysisScreen/ExceptIcon';
import ChatBox from '../../components/analysisScreen/liveScreen/ChatBox';
import { ThemeContext } from "styled-components/native";
const LiveChatScreen = ({onClose}) => {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <TouchableOpacity onPress={onClose}>
        <Image title="Close" source={{uri:'https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png'}}
        style={{marginTop:10,marginLeft:10,height:20,width:20}}/>
      </TouchableOpacity>
      <Text style={{color:'#1B1DB7',fontWeight:'bold',fontSize:20,marginLeft:100,marginTop:10}}>전북현대 VS FC서울</Text>
      <ExceptIcon/>
      <ChatBox/>
    </View>
  );
}
export default LiveChatScreen;
