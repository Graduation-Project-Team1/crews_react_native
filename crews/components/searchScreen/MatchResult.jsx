import React from "react";
import { Image, View, Text } from "react-native";
import { searchResultStyles } from "../../styles/searchScreen/searchResult";

const MatchResult = ({date, score, team1, team2}) => {
  return (
    <View style={searchResultStyles.match}>
      <View style={searchResultStyles.matchInfo}>
        <Text style={searchResultStyles.matchDate}>{date}</Text>
        <Text style={searchResultStyles.matchScore}>{`${score[0]}:${score[1]}`}</Text>
      </View>
      <Image
        source={{uri: team1}}
        style={searchResultStyles.matchImg}/>
      <Image
        source={{uri: team2}}
        style={searchResultStyles.matchImg}/>
    </View>
  );
};

export default MatchResult;
