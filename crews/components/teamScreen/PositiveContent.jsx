import React,{useContext} from "react";
import { Text, View, StyleSheet, ScrollView,Image,Linking } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons";
import { contentStyle } from "../../styles/teamScreen/content";
import { ThemeContext } from "styled-components/native";

const PositiveContent = (props) =>{
    const { title1, created1, img1, url1, title2, created2, img2, url2, title3, created3, img3, url3 } = props;
    const theme = useContext(ThemeContext);
    const handleURL = (url) => {
        Linking.openURL(url);
    };
    
    return(
        <View style={contentStyle.layout}>
            <Text style={[contentStyle.headLine,{color:theme.text}]}>긍정적 관점</Text>
            <TouchableOpacity onPress={() => handleURL(url1)}>
                <View style={contentStyle.boxLayout}>
                    <Text style={[contentStyle.lineNumber,{color:theme.text}]}>1</Text>
                    <View style={{marginLeft:20,flex:1}}>
                        <Text style={[contentStyle.title,{color:theme.text}]}>{title1}</Text>
                        <View style={{flexDirection:'row',marginTop:5}}>
                            <Icon name="time-outline" size={15} color="#A3A3A3" style={contentStyle.timeIcon}/>
                            <Text style={{color:"#A3A3A3"}}>{created1}</Text>
                            <Icon name="people-outline" size={15} color="#A3A3A3" style={contentStyle.viewIcon}/>
                            <Text style={{color:"#A3A3A3"}}>56</Text>
                        </View>
                    </View>
                    <Image style={contentStyle.siteImage} source={{uri: img1}} />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => handleURL(url2)}>
            <View style={contentStyle.boxLayout}>
                <Text style={[contentStyle.lineNumber,{color:theme.text}]}>2</Text>
                <View style={{marginLeft:20,flex:1}}>
                    <Text style={[contentStyle.title,{color:theme.text}]}>{title2}</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Icon name="time-outline" size={15} color="#A3A3A3" style={contentStyle.timeIcon}/>
                        <Text style={{color:"#A3A3A3"}}>{created2}</Text>
                        <Icon name="people-outline" size={15} color="#A3A3A3" style={contentStyle.viewIcon}/>
                        <Text style={{color:"#A3A3A3"}}>56</Text>
                    </View>
                </View>
                <Image style={contentStyle.siteImage} source={{uri: img2}} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleURL(url3)}>
                <View style={contentStyle.boxLayout}>
                    <Text style={[contentStyle.lineNumber,{color:theme.text}]}>3</Text>
                    <View style={{marginLeft:20,flex:1}}>
                        <Text style={[contentStyle.title,{color:theme.text}]}>{title3}</Text>
                        <View style={{flexDirection:'row',marginTop:5}}>
                            <Icon name="time-outline" size={15} color="#A3A3A3" style={contentStyle.timeIcon}/>
                            <Text style={{color:"#A3A3A3"}}>{created3}</Text>
                            <Icon name="people-outline" size={15} color="#A3A3A3" style={contentStyle.viewIcon}/>
                            <Text style={{color:"#A3A3A3"}}>56</Text>
                        </View>
                    </View>
                    <Image style={contentStyle.siteImage} source={source={uri: img3}} />
                </View>
            </TouchableOpacity>
        </View>

    );
};

export default PositiveContent;