import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Keyboard, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SearchResult from "../../components/searchScreen/SearchResult";
import colors from "../../styles/colors";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    setResult(keyword)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.layout}>
      <StatusBar style="auto"/>
      <View style={searchScreenStyle.layout}>
        <View style={searchScreenStyle.header}>
          <TextInput 
            placeholder="검색어를 입력해주세요." 
            placeholderTextColor="#FFFFFF" 
            style={searchScreenStyle.headerText}
            onChangeText={(text) => {setKeyword(text)}}
            onSubmitEditing={handleSearch}/>
            <TouchableHighlight onPress={handleSearch}>
              <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                size={20} 
                color="#FFFFFF"/>
            </TouchableHighlight>
        </View>
        <View style={searchScreenStyle.resultContainer}>
          <SearchResult result={result}/>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;

export const searchScreenStyle = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
  },

  header: {
    flexDirection: 'row',
    color: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    justifyContent: 'space-between'
  },

  headerText: {
    color: colors.white,
  },

  resultContainer: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: colors.white
  },
});