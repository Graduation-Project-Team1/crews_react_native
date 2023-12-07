import { string } from "i/lib/util";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import { emotionApi, mainNewsApi, trendApi } from "../../api/homeApi";
import colors from "../../styles/colors";
import NewsRow from "./NewsRow";
import TitleBar from "./TitleBar";
import TrendCard, { trendCardStyle } from "./TrendCard";

const Contents = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [trendList, setTrendList] = useState([]);
  const [emotionData, setEmotionData] = useState({});

  useEffect(() => {
    mainNewsApi()
    .then((res) => {
      console.log('뉴스리스트 조회');
      console.log(res.result);
      setNewsList(res.result);
    })
    .catch((err) => {
      console.log('뉴스리스트 조회 에러');
      console.log(err);
    });

    trendApi()
    .then((res) => {
      console.log('트렌드 조회');
      console.log(res.result);
      setTrendList(res.result);
    })
    .catch((err) => {
      console.log('트렌드 조회 에러');
      console.log(err);
    });

    emotionApi()
    .then((res) => {
      console.log('여론 감정 조회');
      setEmotionData(res);
    })
    .catch((err) => {
      console.log('여론 감정 조회 에러');
      console.log(err);
    });
  }, []);


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
  }, [scrollOffset, trendList]);

  return (
    <View style={[contentsStyle.layout]}>
      <View>
        <TitleBar text="주요 뉴스" navigation={navigation} target={'이슈'} />
        <View>
          {
            newsList.length > 0 ? newsList.map((news, index) => {
              return (
                <NewsRow key={index} order={index + 1} title={news.title} time={news.createdAt} img={'https://imgnews.pstatic.net/image/421/2023/12/03/0007212695_001_20231203151104193.jpg?type=w647'} url={'https://n.news.naver.com/mnews/article/421/0007212695?sid=102'}/>
              );
            }) : <Text>뉴스가 없습니다.</Text>
          }
        </View>
      </View>
      <View style={{height: 17}} />
      <View>
        <TitleBar text="우리팀 트렌드" navigation={navigation} target={'분석'}  />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} ref={scrollViewRef}>
          {
            trendList.length > 0 ? trendList.map((trend, index) => {
              const isCurrentCard = scrollOffset === index * 168;
              return (
                <TrendCard
                  key={index}
                  order={index + 1}
                  title={trend.keyword}
                  chart={trend.moving}
                  watch={trend.mention}
                  isCurrentCard={isCurrentCard}
                />
              );
            }) : <Text>트렌드가 없습니다.</Text>
          }
          <View style={{width: 168}}/>
        </ScrollView>
        <View style={emotionChartStyle.base}>
          <View style={emotionChartStyle.emotionOuter}>
            <Text style={emotionChartStyle.emotionTitle}>긍정</Text>
            <View style={emotionChartStyle.emotionContent}>
              <View style={emotionChartStyle.emotionChartBase}>
                <View style={emotionChartItemStyle(emotionData ? emotionData.good ? emotionData.good.score : 0 : 0, true)}/>
              </View>
              <View style={emotionChartStyle.emotionChartTagsOuter}>
                {
                  emotionData && emotionData.good &&
                  emotionData.good.keyword.map((word, index) => {
                    return (
                      <Text style={emotionChartStyle.emotionChartTags} key={index}>#{word}</Text>
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
                <View style={emotionChartItemStyle(emotionData ? emotionData.bad ? emotionData.bad.score : 0 : 0, false)}/>
              </View>
              <View style={emotionChartStyle.emotionChartTagsOuter}>
                {
                  emotionData && emotionData.bad &&
                  emotionData.bad.keyword.map((word, index) => {
                    return (
                      <Text style={emotionChartStyle.emotionChartTags} key={index}>#{word}</Text>
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