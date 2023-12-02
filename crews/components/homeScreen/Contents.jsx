import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../styles/colors";
import NewsRow from "./NewsRow";
import TitleBar from "./TitleBar";
import TrendCard, { trendCardStyle } from "./TrendCard";

const Contents = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const rollingInterval = setInterval(() => {
      if (scrollViewRef.current) {
        const contentWidth = 168 * (trendList.length); // 총 너비 계산
        const nextOffset = (scrollOffset + 168) % contentWidth; // 다음으로 스크롤할 위치 계산
        scrollViewRef.current.scrollTo({ x: nextOffset, y: 0, animated: true });
        setScrollOffset(nextOffset);
      }
    }, 2000);

    return () => clearInterval(rollingInterval);
  }, [scrollOffset]);

  const newsList = [
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
      url: "https://www.gachon.ac.kr/kor/index.do",
    },
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
      url: "https://sw.gachon.ac.kr/cms/",
    },
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
      url: "https://www.naver.com",
    },
  ];

  const trendList = [
    {
      title: "키워드1",
      chart: 3,
      watch: 153,
    },
    {
      title: "키워드2",
      chart: -5,
      watch: 153,
    },
    {
      title: "키워드3",
      chart: 3,
      watch: 153,
    },
    {
      title: "키워드5",
      chart: 3,
      watch: 153,
    },
    {
      title: "키워드5",
      chart: 3,
      watch: 153,
    },
  ]

  const emotionData = {
    positive: {
      score: 80,
      keywords: ["키워드1", "키워드2", "키워드3"],
    },
    negative: {
      score: 20,
      keywords: ["키워드1", "키워드2", "키워드3"],
    },
  }

  const positiveStyle = emotionChartItemStyle(emotionData.positive.score, true);
  const negativeStyle = emotionChartItemStyle(emotionData.negative.score, false);

  return (
    <View style={[contentsStyle.layout]}>
      <View>
        <TitleBar text="주요 뉴스" navigation={navigation} target={'이슈'} />
        <View>
          {
            newsList.map((news, index) => {
              return (
                <NewsRow
                  key={index}
                  order={index + 1}
                  title={news.title}
                  time={news.time}
                  watch={news.watch}
                  img={news.img}
                  url={news.url}
                />
              );
            })
          }
        </View>
      </View>
      <View style={{height: 17}} />
      <View>
        <TitleBar text="우리팀 트렌드" navigation={navigation} target={'분석'}  />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
          {
            trendList.map((trend, index) => {
              const isCurrentCard = scrollOffset === index * 168;
              return (
                <TrendCard
                  key={index}
                  order={index + 1}
                  title={trend.title}
                  chart={trend.chart}
                  watch={trend.watch}
                  isCurrentCard={isCurrentCard}
                />
              );
            })
          }
          <View style={{width: 168}}/>
        </ScrollView>
        <View style={emotionChartStyle.base}>
          <View style={emotionChartStyle.emotionOuter}>
            <Text style={emotionChartStyle.emotionTitle}>긍정</Text>
            <View style={emotionChartStyle.emotionContent}>
              <View style={emotionChartStyle.emotionChartBase}>
                <View style={positiveStyle}/>
              </View>
              <View style={emotionChartStyle.emotionChartTagsOuter}>
                {
                  emotionData.positive.keywords.map((keyword, index) => {
                    return (
                      <Text style={emotionChartStyle.emotionChartTags} key={index}>#{keyword}</Text>
                    );
                  })
                }
              </View>
            </View>
          </View>
          <View style={emotionChartStyle.emotionOuter}>
            <Text style={emotionChartStyle.emotionTitle}>부정</Text>
            <View style={emotionChartStyle.emotionContent}>
              <View style={emotionChartStyle.emotionChartBase}>
                <View style={negativeStyle}/>
              </View>
              <View style={emotionChartStyle.emotionChartTagsOuter}>
                {
                  emotionData.negative.keywords.map((keyword, index) => {
                    return (
                      <Text style={emotionChartStyle.emotionChartTags} key={index}>#{keyword}</Text>
                    );
                  })
                }
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Contents;


export const contentsStyle = StyleSheet.create({
  layout: {
    backgroundColor: colors.white,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.black,
    marginTop: 35,
    marginBottom: 20
  }
})

export const emotionChartStyle = StyleSheet.create({
  base: {
    width: "100%",
    height: 135,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 30,
    paddingVertical: 22,
    borderWidth: 1,
    borderColor: colors.dividerGray,
    borderRadius: 13,
    marginTop: 20,
  },

  emotionOuter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },  

  emotionTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: colors.black,
    marginRight: 16,
  },

  emotionContent: {
    flexGrow: 1,
    flexDirection: "column"
  },

  emotionChartBase: {
    width: "100%",
    height: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 6,
    backgroundColor: colors.whiteGray,
  },

  emotionChartTagsOuter: {
    flexDirection: "row",
  },

  emotionChartTags: {
    fontSize: 13,
    fontWeight: 400,
    color: colors.unselectedGray,
    marginRight: 5,
  }
});

export const emotionChartItemStyle = (score, emotion) => {
  return StyleSheet.create({
    width: `${score}%`,
    height: "100%",
    backgroundColor: emotion ? colors.primary : colors.accent,
    borderRadius: 10,
  });
}