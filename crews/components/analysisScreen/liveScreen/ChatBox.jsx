import React, { useState } from 'react';
import {View, Text,Image, ScrollView,TextInput, Button } from "react-native";
import { liveChatBoxStyle } from "../../../styles/analysisScreen/liveScreen/liveChatBox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSend = () => {
        setMessages([...messages, newMessage]);
        setNewMessage('');
    };
    return( 
    <View style={liveChatBoxStyle.container}>
        <ScrollView style={liveChatBoxStyle.messageList}>
            <View style={{flexDirection:'row'}}>
                <Image style={liveChatBoxStyle.imageInput} source={require('../../../assets/analysis/jeonBukIcon.jpg')} />
                <View>
                    <Text style={{marginLeft:10,marginTop:25,fontWeight:'bold'}}>구스타보</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>조규성 부상 당하면 안되는데....</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>아이고... 지금도 부상 많은데 어쩌냐</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <Image style={liveChatBoxStyle.imageInput} source={require('../../../assets/analysis/seoulIcon.png')} />
                <View>
                    <Text style={{marginLeft:10,marginTop:25,fontWeight:'bold'}}>기성용 좋아하는 서울팬</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>서울골!!</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>와 기성용 이게 들어간다고? 말도 안되네</Text>
                </View>
            </View>
            <View style={liveChatBoxStyle.ChattingView}>
                <View style={{marginTop:10}}>
                    <Text style={liveChatBoxStyle.myChattingBox}>서울골!!</Text>
                    <Text style={liveChatBoxStyle.myChattingBox}>와 기성용 이게 들어간다고? 말도 안되네</Text>
                </View>
            </View>

            <View style={{flexDirection:'row'}}>
                <Image style={liveChatBoxStyle.imageInput} source={require('../../../assets/analysis/jeonBukIcon.jpg')} />
                <View>
                    <Text style={{marginLeft:10,marginTop:25,fontWeight:'bold'}}>구스타보</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>조규성 부상 당하면 안되는데....</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>아이고... 지금도 부상 많은데 어쩌냐</Text>
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
                <Image style={liveChatBoxStyle.imageInput} source={require('../../../assets/analysis/seoulIcon.png')} />
                <View>
                    <Text style={{marginLeft:10,marginTop:25,fontWeight:'bold'}}>기성용 좋아하는 서울팬</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>서울골!!</Text>
                    <Text style={liveChatBoxStyle.chattingBox}>와 기성용 이게 들어간다고? 말도 안되네</Text>
                </View>
            </View>
            <View style={liveChatBoxStyle.ChattingView}>
                <View style={{marginTop:10}}>
                    <Text style={liveChatBoxStyle.myChattingBox}>서울골!!</Text>
                    <Text style={liveChatBoxStyle.myChattingBox}>와 기성용 이게 들어간다고? 말도 안되네</Text>
                </View>
            </View>
            {messages.map((message, index) => (
                <View key={index} style={liveChatBoxStyle.ChattingView}>
                    <View style={{marginTop:10}}>
                        <Text style={liveChatBoxStyle.myChattingBox}>{message}</Text>
                    </View>
                </View>
            ))}
            </ScrollView>
            <View style={liveChatBoxStyle.inputContainer}>
                <TextInput
                    value={newMessage}
                    onChangeText={text => setNewMessage(text)}
                    placeholder="메시지를 입력하세요..."
                    style={{ flex: 1,padding:5,backgroundColor:'#F3F6F6',borderRadius:10,marginRight:10}}
                />
                <Icon name="send-circle" size={35} style={{color:'#1B1DB7'}}onPress={handleSend}/>
            </View>

        
    </View>
    );
};

export default ChatBox;