import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { setBgColors, styles } from "../../styles/styles";
import colors from "../../styles/colors";
import Header from "../../components/homeScreen/Header";
import TopContents from "../../components/homeScreen/TopContents";
import Contents from "../../components/homeScreen/Contents";
import { ThemeContext } from "styled-components/native";
import OtherTeamButton from "../../components/common/OtherTeamButton";
import { useRecoilValue } from "recoil";
import { otherTeamState } from "../../recoil/teamState";

const HomeScreen = ({navigation}) => {
  const theme = useContext(ThemeContext);
  const isOtherTeamMode = useRecoilValue(otherTeamState);

  return (
    <ScrollView style={{width:'100%'}}>
    <View style={[styles.layout, {
      backgroundColor: theme.pointBackground,
      }
    ]}>
      <StatusBar style='auto'/>
      <Header navigation={navigation}/>
      {isOtherTeamMode && <OtherTeamButton />}
      <TopContents/>
      <Contents navigation={navigation}/>
    </View>
    </ScrollView>
  );
};

export default HomeScreen;
