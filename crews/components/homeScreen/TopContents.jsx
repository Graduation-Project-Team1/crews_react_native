import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { setColors, styles } from "../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const TopContents = () => {

  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`
  return (
    <View style={[styles.container, topContentsStyles.topContentLayout]}>
      <View style={[topContentsStyles.topContentLeft]}>
        <Text style={[topContentsStyles.topContentTitle]}>
          {formattedDate}의 전북현대
        </Text>
        <View style={topContentsStyles.topContentTextOuter}>
          <Text style={[topContentsStyles.topContentText]}>트렌드 순위 3위</Text>
          <Text style={[topContentsStyles.topContentText]}>최근 경기 : FC 서울</Text>
        </View>
      </View>
      <View style={[topContentsStyles.topContentRight]}>
        <Image
          style={topContentsStyles.topContentImageBlack}
          source={{
            uri: 'https://yt3.googleusercontent.com/LoJX3yKY2JEnaTdlb4Era-RJcj6GO7zwl2AQ_aEn1UADu7qOwXmuEzuopqOsT43hKhbb1piQmw=s900-c-k-c0x00ffffff-no-rj'
          }}
        />
        <Image
          style={topContentsStyles.topContentImage}
          source={{
            uri: 'https://yt3.googleusercontent.com/LoJX3yKY2JEnaTdlb4Era-RJcj6GO7zwl2AQ_aEn1UADu7qOwXmuEzuopqOsT43hKhbb1piQmw=s900-c-k-c0x00ffffff-no-rj'
          }}
        />
        <FontAwesomeIcon 
          style={topContentsStyles.topContentPlay}
          icon={faPlay}
          size={25}
        />
      </View>
    </View>
  );
};

export default TopContents;

export const topContentsStyles = StyleSheet.create({
  topContentLayout: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 16,
  },

  topContentLeft: {
    flex: 1.5,
    justifyContent: "center",
    marginEnd: 20,
  },

  topContentRight: {
    flex: 1,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },

  topContentTextOuter: {
    marginTop: 20,
  },

  topContentTitle: {
    alignItems: "center",
    justifyContent: "flex-start",
    color: colors.white,
    fontSize: 16,
    fontWeight: 400,
  },

  topContentText: {
    alignItems: "center",
    justifyContent: "flex-start",
    color: colors.white,
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 27,
  },

  topContentImageBlack: {
    width:100,
    height:100, 
    aspectRatio: 1,
    borderRadius: 100,
    position: "relative",
    tintColor: 'black'
  },

  topContentImage: {
    width:100,
    height:100, 
    aspectRatio: 1,
    borderRadius: 100,
    position: "absolute",
    opacity: 0.5
  },

  topContentPlay: {
    color: colors.white,
    position: "absolute",
    top: "auto",
    bottom: "auto",
    left: "auto",
    right: "auto"
  }
})