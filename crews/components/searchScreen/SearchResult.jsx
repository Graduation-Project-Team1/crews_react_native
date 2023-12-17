import React, { useContext, useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RadioResult from "./RadioResult";
import MatchResult from "./MatchResult";
import NewsRow from "../homeScreen/NewsRow";
import colors from "../../styles/colors";
import Right from "../../assets/icons/icon_right.svg";
import { searchApi } from "../../api/searchApi";
import { ThemeContext } from "styled-components/native";
import { useRecoilState, useSetRecoilState } from "recoil";
import { otherTeamState, prevTeamState, userTeamState } from "../../recoil/teamState";
import { useNavigation } from "@react-navigation/native";

const SearchResult = ({result}) => {
  const theme = useContext(ThemeContext);
  const [currentTeam, setCurrentTeam] = useRecoilState(userTeamState);
  const setOtherTeamMode = useSetRecoilState(otherTeamState);
  const setPrevTeam = useSetRecoilState(prevTeamState);
  const navigation = useNavigation();
  const [teamData, setTeamData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [radioData, setRadioData] = useState([]);

  useEffect(() => {

    if (result === '') {
      return (
        <View style={emptyResultStyle.base}>
          <Text style={[emptyResultStyle.text, {color: theme.text}]}>검색 결과가 없습니다.</Text>
        </View>
      )
    }

    searchApi(result)
      .then((res) => {
        console.log(res.teamInfoResponses);
        setTeamData(res.teamInfoResponses);
        setNewsData(res.newsResponses);
        setRadioData(res.podcastInfoResponses);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [result])

  const handleOtherTeamClick = (team) => {
    console.log("다른 팀 클릭");

    setPrevTeam({
      name: currentTeam.name,
      id: currentTeam.id,
    });

    setOtherTeamMode(true);
    setCurrentTeam({
      ...currentTeam,
      name: team.teamName,
      id: team.teamId,
    })
    navigation.goBack();
  };

  return (
    <View style={searchResultStyle.layout}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          teamData !== null && teamData.map((team, idx) =>  (
            <View key={idx}>
              <View>
                <Text style={searchResultStyle.teamGray}>{`다른 팀이 궁금하신가요?\n내 팀을 변경하지 않고 다른 팀을 구경해보세요.`}</Text>
                <TouchableOpacity style={searchResultStyle.team} onPress={()=>handleOtherTeamClick(team)}>
                  <Image 
                    source={{uri: team.logo}}
                    style={searchResultStyle.teamImg}/>
                  <View style={searchResultStyle.teamInfo}>
                    <Text style={[searchResultStyle.teamTitle, {color: theme.text}]}>{team.teamName}</Text>
                    <Text style={[searchResultStyle.teamCategory, {color: theme.text}]}>국내 축구</Text>
                  </View>
                  <Right width={24} height={24} fill={colors.black}/>
                </TouchableOpacity>
              </View>
              <View style={searchResultStyle.divider}/>
            </View>
          ))
        }
        {
          newsData && newsData.length > 0 && (
            <View style={searchResultStyle.contentContainer}>
              <Text style={[searchResultStyle.headerText, {color: theme.text}]}>뉴스</Text>
              <View>
                {
                  newsData.map((news, index) => (
                    <NewsRow
                      key={index}
                      order={index + 1}
                      title={news.title}
                      time={news.date}
                      press={news.press}
                      url={news.url}
                  />
                  ))
                }
              </View>
            </View>
          )
        }
        {
          radioData && radioData.length > 0 && (
            <View style={searchResultStyle.contentContainer}>
              <Text style={[searchResultStyle.headerText, {color: theme.text}]}>라디오</Text>
              <View>
                {
                  radioData.map((radio, index) => (
                    <RadioResult
                      key={index}
                      order={index + 1}
                      title={radio.title}
                      tags={radio.teamName}
                    />
                  ))
                }
              </View>
            </View>
          )
        }
      </ScrollView>
    </View>
  );
};

export default SearchResult;

export const searchResultStyle = StyleSheet.create({
  layout: {
    width: "100%",
    height: "100%",
    paddingVertical: 30,
    paddingHorizontal: 16,
  },

  headerText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 20
  },

  contentContainer: {
    paddingTop: 30,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: colors.dividerGray,
    marginTop: 20,
  },

  teamGray: {
    color: colors.textGray, // --Text-Gray, #A3A3A3
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21, // 150% of 14px
  },

  team: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  },

  teamImg: {
    width: 55,
    height: 55,
    borderRadius: 50
  },

  teamInfo: {
    flex: 1,
    marginLeft: 20,
  },

  teamTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24
  },

  teamCategory: {
    color: colors.black,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 19.5
  },
});

export const emptyResultStyle = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.textGray,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
  }
})