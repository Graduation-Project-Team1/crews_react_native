import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Keyboard, Text, TextInput, TouchableHighlight, View } from "react-native";
import { styles } from "../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { searchScreenStyles } from "../../styles/searchScreen/searchScreenStyles";
import SearchResult from "../../components/searchScreen/SearchResult";

const SearchScreen = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (search) => {
    if (keyword.length > 0) {
      setResult(keyword)
      Keyboard.dismiss()
    }
  }

  return (
    <View style={styles.layout}>
      <StatusBar style="auto"/>
      <View style={searchScreenStyles.layout}>
        <View style={searchScreenStyles.header}>
          <TextInput 
            placeholder="검색어를 입력해주세요." 
            placeholderTextColor="#FFFFFF" 
            style={searchScreenStyles.headerText}
            onChangeText={(text) => {setKeyword(text)}}
            onSubmitEditing={handleSearch}/>
            <TouchableHighlight onPress={handleSearch}>
              <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                size={20} 
                color="#FFFFFF"/>
            </TouchableHighlight>
        </View>
        <View style={searchScreenStyles.resultContainer}>
          <SearchResult result={result}/>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
