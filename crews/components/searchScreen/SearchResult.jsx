import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import RadioResult from "./RadioResult";
import MatchResult from "./MatchResult";
import NewsRow from "../homeScreen/NewsRow";
import colors from "../../styles/colors";
import Right from "../../assets/icons/icon_right.svg";
import { searchApi } from "../../api/searchApi";

const SearchResult = ({result}) => {
  const [teamData, setTeamData] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [radioData, setRadioData] = useState([]);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    searchApi(result)
      .then((res) => {
        setTeamData(res.team);
        setNewsData(res.news);
        setRadioData(res.radio);
        setGameData(res.game);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [result])

  if (result === '') {
    return (
      <View style={emptyResultStyle.base}>
        <Text style={emptyResultStyle.text}>검색 결과가 없습니다.</Text>
      </View>
    )
  }

  return (
    <View style={searchResultStyle.layout}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          teamData !== null && (
            <View>
              <View>
                <Text style={searchResultStyle.teamGray}>{`다른 팀이 궁금하신가요?\n내 팀을 변경하지 않고 다른 팀을 구경해보세요.`}</Text>
                <View style={searchResultStyle.team}>
                  <Image 
                    source={{uri: teamData.img}}
                    style={searchResultStyle.teamImg}/>
                  <View style={searchResultStyle.teamInfo}>
                    <Text style={searchResultStyle.teamTitle}>{teamData.name}</Text>
                    <Text style={searchResultStyle.teamCategory}>{teamData.category}</Text>
                  </View>
                  <Right width={24} height={24} fill={colors.black}/>
                </View>
              </View>
              <View style={searchResultStyle.divider}/>
            </View>
          )
        }
        {
          newsData.length > 0 && (
            <View style={searchResultStyle.contentContainer}>
              <Text style={searchResultStyle.headerText}>뉴스</Text>
              <View>
                {
                  newsData.map((news, index) => (
                    <NewsRow
                      key={index}
                      order={index + 1}
                      title={news.title}
                      time={news.createdAt}
                      img={news.img}
                      url={news.url}
                  />
                  ))
                }
              </View>
            </View>
          )
        }
        {
          radioData.length > 0 && (
            <View style={searchResultStyle.contentContainer}>
              <Text style={searchResultStyle.headerText}>라디오</Text>
              <View>
                {
                  radioData.map((radio, index) => (
                    <RadioResult
                      key={index}
                      order={index + 1}
                      title={radio.title}
                      tags={radio.tags}
                    />
                  ))
                }
              </View>
            </View>
          )
        }
        {
          gameData.length > 0 && (
            
            <View style={searchResultStyle.contentContainer}>
              <Text style={searchResultStyle.headerText}>경기 정보</Text>
              <View>
                {
                  gameData.map((game, index) => (
                    <MatchResult
                      key={index}
                      date={game.time}
                      team1={game.team[0]}
                      team2={game.team[1]}
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