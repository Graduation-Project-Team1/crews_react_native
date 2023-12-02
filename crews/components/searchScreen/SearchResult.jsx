import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import RadioResult from "./RadioResult";
import MatchResult from "./MatchResult";
import NewsRow from "../homeScreen/NewsRow";
import colors from "../../styles/colors";
import Right from "../../assets/icons/icon_right.svg";

const SearchResult = ({result}) => {

  const resultData = {
    team: {
      name: 'FC 서울',
      img: 'https://files.fcseoul.com/multi01/Club/Club/em_K09.png',
      category: '국내 축구',
    },
    news: [
      {
        title: "프로야구, 2021년 3월 13일 개막",
        time: "2023.08.01 17:03",
        watch: "1,234",
        img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
        url: "https://www.naver.com",
      },
      {
        title: "프로야구, 2021년 3월 13일 개막",
        time: "2023.08.01 17:03",
        watch: "1,234",
        img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
        url: "https://www.naver.com",
      },
      {
        title: "프로야구, 2021년 3월 13일 개막",
        time: "2023.08.01 17:03",
        watch: "1,234",
        img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
        url: "https://www.naver.com",
      },
    ],
    radio: [
      {
        title: "2023.05.23 (월)",
        tags: [
          "프로야구",
          "KBO",
          "경기",
        ]
      },
      {
        title: "2023.05.22 (월)",
        tags: [
          "프로야구",
          "KBO",
          "경기",
        ]
      },
      {
        title: "2023.05.22 (월)",
        tags: [
          "프로야구",
          "KBO",
          "경기",
        ]
      }
    ],
    game: [
      {
        time: "2023.05.22 (월)",
        team: [
          {
            score: 1,
            img: "https://jbhd-upload-file.s3.ap-northeast-2.amazonaws.com/images/img_emblem_1.827563b2.png",
          },
          {
            score: 0,
            img: "https://files.fcseoul.com/multi01/Club/Club/em_K09.png",
          }
        ]
      },
      {
        time: "2023.05.22 (월)",
        team: [
          {
            score: 1,
            img: "https://jbhd-upload-file.s3.ap-northeast-2.amazonaws.com/images/img_emblem_1.827563b2.png",
          },
          {
            score: 0,
            img: "https://files.fcseoul.com/multi01/Club/Club/em_K09.png",
          }
        ]
      }
    ]
  }

  if (result === '') {
    return (
      <View style={emptyResultStyle.base}>
        <Text style={emptyResultStyle.text}>검색 결과가 없습니다.</Text>
      </View>
    )
  } else {
    result = resultData;
  }

  return (
    <View style={searchResultStyle.layout}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          resultData.team !== null && (
            <View>
              <View>
                <Text style={searchResultStyle.teamGray}>{`다른 팀이 궁금하신가요?\n내 팀을 변경하지 않고 다른 팀을 구경해보세요.`}</Text>
                <View style={searchResultStyle.team}>
                  <Image 
                    source={{uri: result.team.img}}
                    style={searchResultStyle.teamImg}/>
                  <View style={searchResultStyle.teamInfo}>
                    <Text style={searchResultStyle.teamTitle}>{result.team.name}</Text>
                    <Text style={searchResultStyle.teamCategory}>{result.team.category}</Text>
                  </View>
                  <Right width={24} height={24} fill={colors.black}/>
                </View>
              </View>
              <View style={searchResultStyle.divider}/>
            </View>
          )
        }
        {
          resultData.news !== null && (
            <View style={searchResultStyle.contentContainer}>
              <Text style={searchResultStyle.headerText}>뉴스</Text>
              <View>
                {
                  result.news.map((news, index) => (
                    <NewsRow
                      key={index}
                      order={index + 1}
                      title={news.title}
                      time={news.time}
                      watch={news.watch}
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
          resultData.radio !== null && (
            <View style={searchResultStyle.contentContainer}>
              <Text style={searchResultStyle.headerText}>라디오</Text>
              <View>
                {
                  result.radio.map((radio, index) => (
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
          resultData.game !== null && (
            
            <View style={searchResultStyle.contentContainer}>
              <Text style={searchResultStyle.headerText}>경기 정보</Text>
              <View>
                {
                  result.game.map((game, index) => (
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