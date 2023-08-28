import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { searchScreenStyles } from "../styles/searchScreen/searchScreenStyles";

const SearchScreen = () => {
  return (
    <View style={styles.layout}>
      <StatusBar style="auto"/>
      <View style={searchScreenStyles.layout}>
        <View style={searchScreenStyles.header}>
          <TextInput placeholder="검색어를 입력해주세요." style={searchScreenStyles.headerText}/>
          <FontAwesomeIcon icon={faMagnifyingGlass} size={24}/>
        </View>
        <View style={searchScreenStyles.resultContainer}>
          <Text>검색결과</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
