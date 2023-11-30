import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ExceptIcon from '../../components/analysisScreen/ExceptIcon';
import ChatBox from '../../components/analysisScreen/liveScreen/ChatBox';
const LiveChatScreen = ({onClose}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Button title="Close" onPress={onClose} />
      <Text style={{color:'#1B1DB7',fontWeight:'bold',fontSize:20,marginLeft:100,marginTop:10}}>전북현대 VS FC서울</Text>
      <ExceptIcon/>
      <ChatBox/>
    </View>
  );
}
export default LiveChatScreen;
