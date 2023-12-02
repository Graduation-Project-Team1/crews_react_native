import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../styles/colors";
import Right from "../../assets/icons/icon_right.svg";

const TitleBar = ({text, navigation, target}) => {
  const handlePress = () => {
    navigation.navigate(target);
  }
  return (
    <View style={titleBarStyle}>
      <Text style={titleBarTextStyle}>{text}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Right width={24} height={24}/>
      </TouchableOpacity>
    </View>
  );
};

export default TitleBar;

export const titleBarStyle = StyleSheet.create({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: 18,
  marginBottom: 18,
})

export const titleBarTextStyle = StyleSheet.create({
  fontSize: 18,
  fontWeight: 700,
  color: colors.black,
})