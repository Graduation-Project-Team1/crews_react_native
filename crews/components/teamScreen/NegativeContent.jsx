import React from "react";
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { contentStyle } from "../../styles/teamScreen/content";

const NegativeContent = () =>{
    return(
        <View style={contentStyle.layout}>
            <Text style={contentStyle.headLine}>부정적 관점</Text>
            <View style={contentStyle.boxLayout}>
                <Text style={contentStyle.lineNumber}>1</Text>
                <View style={{marginLeft:20,flex:1}}>
                    <Text style={contentStyle.title}>이번 경기 어떨까</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Icon name="time-outline" size={15} color="#A3A3A3" style={contentStyle.timeIcon}/>
                        <Text style={{color:"#A3A3A3"}}>2023.08.25 15:32</Text>
                        <Icon name="people-outline" size={15} color="#A3A3A3" style={contentStyle.viewIcon}/>
                        <Text style={{color:"#A3A3A3"}}>56</Text>
                    </View>
                </View>
                <Image style={contentStyle.siteImage} source={require('../../assets/team/team-dcinside.png')} />
            </View>

            <View style={contentStyle.boxLayout}>
                <Text style={contentStyle.lineNumber}>2</Text>
                <View style={{marginLeft:20,flex:1}}>
                    <Text style={contentStyle.title}>이번 경기 어떨까</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Icon name="time-outline" size={15} color="#A3A3A3" style={contentStyle.timeIcon}/>
                        <Text style={{color:"#A3A3A3"}}>2023.08.25 15:32</Text>
                        <Icon name="people-outline" size={15} color="#A3A3A3" style={contentStyle.viewIcon}/>
                        <Text style={{color:"#A3A3A3"}}>56</Text>
                    </View>
                </View>
                <Image style={contentStyle.siteImage} source={require('../../assets/team/team-dcinside.png')} />
            </View>

            <View style={contentStyle.boxLayout}>
                <Text style={contentStyle.lineNumber}>3</Text>
                <View style={{marginLeft:20,flex:1}}>
                    <Text style={contentStyle.title}>이번 경기 어떨까</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Icon name="time-outline" size={15} color="#A3A3A3" style={contentStyle.timeIcon}/>
                        <Text style={{color:"#A3A3A3"}}>2023.08.25 15:32</Text>
                        <Icon name="people-outline" size={15} color="#A3A3A3" style={contentStyle.viewIcon}/>
                        <Text style={{color:"#A3A3A3"}}>56</Text>
                    </View>
                </View>
                <Image style={contentStyle.siteImage} source={require('../../assets/team/team-dcinside.png')} />
            </View>

        </View>

    );
};

export default NegativeContent;