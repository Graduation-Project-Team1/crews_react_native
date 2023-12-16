import React from "react";
import { Text, View, Image, ImageBackground, StyleSheet } from "react-native";
import colors from "../../styles/colors";
import { setColors, styles } from "../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { getTeamName } from "../../api/asyncStorage";
import { useRecoilValue } from "recoil";
import { userTeamState } from "../../recoil/teamState";
import Team6908 from '../../assets/team/6908.png';
import Team7644 from '../../assets/team/7644.png';
import Team7645 from '../../assets/team/7645.png';
import Team7646 from '../../assets/team/7646.png';
import Team7648 from '../../assets/team/7648.png';
import Team7649 from '../../assets/team/7649.png';
import Team7652 from '../../assets/team/7652.png';
import Team7653 from '../../assets/team/7653.png';
import Team7650 from '../../assets/team/7650.png';
import Team34220 from '../../assets/team/34220.png';
import Team41261 from '../../assets/team/41261.png';
import Team48912 from '../../assets/team/48912.png';

const TopContents = () => {
  const currentTeam = useRecoilValue(userTeamState);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일`

  const imgSrc = (id) => {
      switch (id) {
          case 6908:
              return Team6908;
          case 7644:
              return Team7644;
          case 7645:
              return Team7645;
          case 7646:
              return Team7646;
          case 7648:
              return Team7648;
          case 7649:
              return Team7649;
          case 7652:
              return Team7652;
          case 7653:
              return Team7653;
          case 7650:
              return Team7650;
          case 34220:
              return Team34220;
          case 41261:
              return Team41261;
          case 48912:
              return Team48912;
          default:
              return Team6908;
      }
  }
  return (
    <View style={[styles.container, topContentsStyles.topContentLayout]}>
      <View style={[topContentsStyles.topContentLeft]}>
        <Text style={[topContentsStyles.topContentTitle]}>
          {formattedDate}의 {currentTeam.name}
        </Text>
        <View style={topContentsStyles.topContentTextOuter}>
          <Text style={[topContentsStyles.topContentText]}>트렌드 순위 3위</Text>
          <Text style={[topContentsStyles.topContentText]}>최근 경기 : FC 서울</Text>
        </View>
      </View>
      <View style={[topContentsStyles.topContentRight]}>
        <View
          style={topContentsStyles.topContentImageBlack}
        />
        <Image
          style={topContentsStyles.topContentImage}
          source={imgSrc(currentTeam && currentTeam.id !== null ? currentTeam.id : 6908)}
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