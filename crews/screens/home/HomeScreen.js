import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { setBgColors, styles } from "../../styles/styles";
import colors from "../../styles/colors";
import Header from "../../components/homeScreen/Header";
import TopContents from "../../components/homeScreen/TopContents";
import Contents from "../../components/homeScreen/Contents";

const HomeScreen = ({navigation}) => {
  return (
    <View style={[styles.layout, setBgColors.green]}>
      <StatusBar style='auto'/>
      <Header navigation={navigation}/>
      <TopContents/>
      <Contents/>
    </View>
  );
};

export default HomeScreen;
