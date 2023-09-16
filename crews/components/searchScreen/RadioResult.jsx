import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View } from "react-native";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { searchResultStyles } from "../../styles/searchScreen/searchResult";

const RadioResult = ({rank, title, tags}) => {
  return (
    <View style={searchResultStyles.radio}>
      <Text style={searchResultStyles.rank}>{rank}</Text>
      <View style={searchResultStyles.radioContent}>
        <Text style={searchResultStyles.titleText}>{title}</Text>
        <Text style={searchResultStyles.subText}>{`#${tags[0]} #${tags[1]} #${tags[2]}`}</Text>
      </View>
      <FontAwesomeIcon icon={faPlay} size={30}/>
    </View>
  );
};

export default RadioResult;
