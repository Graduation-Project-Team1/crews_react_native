import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/styles";
import Tag from "../../components/common/Tag";
import CommunityBox from "../../components/issueScreen/CommunityBox";
import NewsSection from "../../components/issueScreen/NewsSection";
import colors from "../../styles/colors";
import SNSBox from "../../components/issueScreen/SNSBox";
import { communityDataApi, snsDataApi, totalNewsApi } from "../../api/issueApi";
import { ThemeContext } from "styled-components/native";
import { useRecoilValue } from "recoil";
import { themeState } from "../../recoil/themeState";

const IssueScreen = () => {
  const theme = useContext(ThemeContext);
  const currentTheme = useRecoilValue(themeState);
  const [value, setValue] = useState('twitter');
  const [twitterData, setTwitterData] = useState(null);
  const [instagramData, setInstagramData] = useState(null);
  const [redditData, setRedditData] = useState(null);
  const [communityData, setCommunityData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    snsDataApi()
      .then((res) => {
        setTwitterData(res.filter(item => item.sns === 'twitter')[0]);
        setInstagramData(res.filter(item => item.sns === 'instagram')[0]);
        setRedditData(res.filter(item => item.sns === 'reddit')[0]);
      })
      .catch((err) => {
        console.log(err);
      });

    totalNewsApi()
      .then((res) => {
        setNewsData(res);
      })
      .catch((err) => {
        console.log(err);
      });

    communityDataApi()
      .then((res) => {
        setCommunityData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={[styles.layout, {
      backgroundColor: theme.background,
    }]}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'}/>
      <ScrollView style={[styles.scrollContainer, {
        backgroundColor: theme.background,
      }]}>
        <View style={[issueScreenStyle.content, {
        backgroundColor: theme.background,
      }]}>
          <Text style={[issueScreenStyle.sectionTitle, {
        color: theme.text,
      }]}>SNS 핫이슈</Text>
          <View style={issueScreenStyle.snsTags}>
            <Tag isSelected={value === 'twitter'} text={'트위터'} onPress={()=>setValue('twitter')}/>
            <Tag isSelected={value === 'instagram'} text={'인스타그램'} onPress={()=>setValue('instagram')}/>
            <Tag isSelected={value === 'reddit'} text={'레딧'} onPress={()=>setValue('reddit')}/>
          </View>
          <View style={issueScreenStyle.snsContent}>
            {
              value === 'twitter' ? twitterData && <SNSBox sns={value} nickname={twitterData.name} id={twitterData.id} content={twitterData.body} like={twitterData.heart} time={twitterData.date}/> :
              value === 'instagram' ? instagramData && <SNSBox sns={value} nickname={instagramData.name} id={instagramData.id} content={instagramData.body} like={instagramData.heart} time={instagramData.date}/> :
              value === 'reddit' ? redditData && <SNSBox sns={value} nickname={redditData.name} id={redditData.id} content={redditData.body} like={redditData.heart} time={redditData.date}/> : <Text>값이 없습니다.</Text>
            }
          </View>
        </View>
        <View style={[issueScreenStyle.content, {
        backgroundColor: theme.background,
      }]}>
          <Text style={[issueScreenStyle.sectionTitle, {
        color: theme.text,
      }]}>커뮤니티 핫이슈</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              communityData && communityData.length > 0 ? communityData.map((item, index) => (
                <CommunityBox key={index} press={item.press} title={item.title} writer={item.writer} url={item.url}/>
              )) : <Text styl={[{color: theme.text}]}>값이 없습니다.</Text>
            }
          </ScrollView>
        </View>
        <View style={issueScreenStyle.divider}/>
        <View style={[issueScreenStyle.content, {
        backgroundColor: theme.background,
      }]}>
          <NewsSection newsList={newsData}/>
        </View>
        <View style={{height: 60}} />
      </ScrollView>
    </View>
  );
};

export default IssueScreen;

export const issueScreenStyle = StyleSheet.create({

  sectionTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: colors.black,
    marginTop: 24,
    marginBottom: 20,
  },

  content: {
    backgroundColor: colors.white,
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 16,
  },

  divider: {
    width: "100%",
    height: 4,
    backgroundColor: colors.dividerGray,
    marginTop: 29,
  },

  snsTags: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 13,
    columnGap: 11,
  },

  snsContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.transparent
  }
})