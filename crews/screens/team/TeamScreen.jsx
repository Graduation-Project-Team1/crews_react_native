import React, {useContext} from "react";
import { Text, View,ScrollView } from "react-native";
import Keyword from "../../components/teamScreen/Keyword";
import { ThemeContext } from "styled-components/native";

const TeamScreen = () => {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:theme.background}}>
      <Keyword/>
    </ScrollView>
  );
};

export default TeamScreen;
