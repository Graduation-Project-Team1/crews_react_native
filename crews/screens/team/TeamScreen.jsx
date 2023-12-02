import React from "react";
import { Text, View,ScrollView } from "react-native";
import Keyword from "../../components/teamScreen/Keyword";

const TeamScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#FFFFFF"}}>
      <Keyword/>
    </ScrollView>
  );
};

export default TeamScreen;
