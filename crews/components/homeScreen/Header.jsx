import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { setColors, styles } from "../../styles/styles";
import { TouchableOpacity } from "react-native";
import Search from "../../assets/icons/icon_search.svg";
import Menu from "../../assets/icons/icon_menu.svg";

const Header = ({navigation}) => {
  return (
    <View style={headerStyles}>
    <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
      <Search width={24} height={24}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {() => navigation.navigate('SettingIndex')}>
      <Menu width={24} height={24}/>
    </TouchableOpacity>
    </View>
  );
};

export default Header;

export const headerStyles = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  padding: 13,
  columnGap: 13,
});