import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { View, Text, TouchableWithoutFeedback, TouchableHighlight } from "react-native";
import { headerStyles } from "../../styles/homeScreen/header";
import { setColors, styles } from "../../styles/styles";
import { TouchableOpacity } from "react-native";

const Header = ({navigation}) => {
  return (
    <View style={[styles.container, headerStyles.headerLayout]}>
      <Text style={[headerStyles.headerTitle, setColors.white]}>CREWS</Text>
      <View style={headerStyles.headerRight}>
        <TouchableHighlight onPress={()=>navigation.navigate('Search')}>
          <FontAwesomeIcon style={[headerStyles.headerIcon, setColors.white]} icon={faMagnifyingGlass} size={20}/>
        </TouchableHighlight>
        <TouchableOpacity onPress = {() => navigation.navigate('SettingIndex')}>
          <FontAwesomeIcon style={[setColors.white]} icon={faBars} size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
