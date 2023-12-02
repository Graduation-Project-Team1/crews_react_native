import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import colors from "../../styles/colors";

const MatchResult = ({date, team1, team2}) => {
  return (
    <View style={matchResultStyle.base}>
      <View style={matchResultStyle.matchInfo}>
        <Text style={matchResultStyle.matchDate}>{date}</Text>
        <Text style={matchResultStyle.matchScore}>{`${team1.score} : ${team2.score}`}</Text>
      </View>
      <Image
        source={{uri: team1.img}}
        style={matchResultStyle.matchImg}/>
      <Image
        source={{uri: team2.img}}
        style={matchResultStyle.matchImg}/>
    </View>
  );
};

export default MatchResult;

export const matchResultStyle = StyleSheet.create({
  base: {
    width: '100%',
    height: 74,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: colors.dividerGray,
    backgroundColor: colors.white,
    flexDirection: 'row',
    paddingVertical: 13,
    paddingHorizontal: 16,
    marginBottom: 11
  },

  matchInfo: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between'
  },

  matchDate: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5
  },

  matchScore: {
    color: colors.black,
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 22.5
  },

  matchImg: {
    marginLeft: 6.5,
    width: 47,
    height: 47,
    borderRadius: 8,
  }
});