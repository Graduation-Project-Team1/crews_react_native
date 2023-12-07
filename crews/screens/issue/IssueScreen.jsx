import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/styles";
import Tag from "../../components/common/Tag";
import CommunityBox from "../../components/issueScreen/CommunityBox";
import NewsSection from "../../components/issueScreen/NewsSection";
import colors from "../../styles/colors";
import SNSBox from "../../components/issueScreen/SNSBox";
import { snsDataApi, totalNewsApi } from "../../api/issueApi";

const IssueScreen = () => {
  const [value, setValue] = useState('twitter');
  const [twitterData, setTwitterData] = useState(null);
  const [instagramData, setInstagramData] = useState(null);
  const [redditData, setRedditData] = useState(null);
  const [communityData, setCommunityData] = useState([]);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    snsDataApi()
      .then((res) => {
        setTwitterData(res.twitter);
        setInstagramData(res.instagram);
        setRedditData(res.reddit);
        setCommunityData(res.community);
      })
      .catch((err) => {
        console.log(err);
      });

    totalNewsApi()
      .then((res) => {
        setNewsData(res.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={[styles.layout]}>
      <StatusBar style='auto'/>
      <ScrollView style={styles.scrollContainer}>
        <View style={issueScreenStyle.content}>
          <Text style={issueScreenStyle.sectionTitle}>SNS 핫이슈</Text>
          <View style={issueScreenStyle.snsTags}>
            <Tag isSelected={value === 'twitter'} text={'트위터'} onPress={()=>setValue('twitter')}/>
            <Tag isSelected={value === 'instagram'} text={'인스타그램'} onPress={()=>setValue('instagram')}/>
            <Tag isSelected={value === 'reddit'} text={'레딧'} onPress={()=>setValue('reddit')}/>
          </View>
          <View style={issueScreenStyle.snsContent}>
            {
              value === 'twitter' ? twitterData && <SNSBox sns={value} nickname={twitterData.nickname} id={twitterData.id} content={twitterData.content} like={twitterData.like} time={twitterData.time}/> :
              value === 'instagram' ? instagramData && <SNSBox sns={value} nickname={instagramData.nickname} id={instagramData.id} content={instagramData.content} like={instagramData.like} time={instagramData.time}/> :
              value === 'reddit' ? redditData && <SNSBox sns={value} nickname={redditData.nickname} id={redditData.id} content={redditData.content} like={redditData.like} time={redditData.time}/> : <Text>값이 없습니다.</Text>
            }
          </View>
        </View>
        <View style={issueScreenStyle.content}>
          <Text style={issueScreenStyle.sectionTitle}>커뮤니티 핫이슈</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
              communityData.length > 0 ? communityData.map((item, index) => (
                <CommunityBox key={index} img={item.img} title={item.title} writer={item.writer} url={item.url}/>
              )) : <Text>값이 없습니다.</Text>
            }
          </ScrollView>
        </View>
        <View style={issueScreenStyle.divider}/>
        <View style={issueScreenStyle.content}>
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
  }
})