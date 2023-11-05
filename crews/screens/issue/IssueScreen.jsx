import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/styles";
import Tag from "../../components/common/Tag";
import CommunityBox from "../../components/issueScreen/CommunityBox";
import NewsSection from "../../components/issueScreen/NewsSection";
import colors from "../../styles/colors";
import SNSBox from "../../components/issueScreen/SNSBox";

const IssueScreen = () => {
  const [value, setValue] = useState('twitter');

  const snsList = [
    {
      sns: 'twitter',
      nickname: 'twitUser0309',
      id: 'twit0309',
      content: 'Lorem ipsum dolor sit amet consectetur. Eget orci enim tortor mi elementum leo arcu. Sit maecenas et auctor netus ac ut eget. Habitant lectus pharetra nulla ullamcorper suscipit suspendisse aliquam tristique velit. Lacus malesuada sit vel Lorem ipsum dolor sit amet consectetur. Eget orci enim tortor mi elementum leo arcu. Sit maecenas et auctor netus ac ut eget. Habitant lectus pharetra nulla ullamcorper suscipit suspendisse aliquam tristique velit. Lacus malesuada sit vel ',
      like: 650,
      time: '2021.08.01 17:03',
    },
    {
      sns: 'instagram',
      nickname: 'instaUser0309',
      id: 'insta0309',
      content: '어쩌구저쩌구',
      like: 650,
      time: '2021.08.01 17:03',
    },
    {
      sns: 'reddit',
      nickname: 'redditUser0309',
      id: 'reddit0309',
      content: '어쩌구저쩌구',
      like: 650,
      time: '2021.08.01 17:03',
    },
  ];

  const communityIssueList = [
    {
      img: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_3.png',
      title: '어쩌구이슈',
      writer: '김민수',
    },
    {
      img: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_3.png',
      title: '어쩌구이슈',
      writer: '김민수',
    },
    {
      img: 'https://www.ksponco.or.kr/sports/img/olparksoccer/know_3.png',
      title: '어쩌구이슈',
      writer: '김민수',
    },
  ];

  const positiveNewsList = [
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
    },
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
    },
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
    },
  ]

  const negativeNewsList = [
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
    },
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
    },
    {
      title: "프로야구, 2021년 3월 13일 개막",
      time: "2023.08.01 17:03",
      watch: "1,234",
      img: 'https://r.yna.co.kr/global/home/v01/img/yonhapnews_logo_1200x800_kr01.jpg',
    },
  ]

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
              snsList.filter(item => item.sns === value).map((item, index) => (
                <SNSBox key={index} sns={item.sns} nickname={item.nickname} id={item.id} content={item.content} like={item.like} time={item.time}/>
              ))
            }
          </View>
        </View>
        <View style={issueScreenStyle.content}>
          <Text style={issueScreenStyle.sectionTitle}>커뮤니티 핫이슈</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {communityIssueList.map((item, index) => (
              <CommunityBox key={index} img={item.img} title={item.title} writer={item.writer}/>
            ))}
          </ScrollView>
        </View>
        <View style={issueScreenStyle.divider}/>
        <View style={issueScreenStyle.content}>
          <NewsSection emotion={true} newsList={positiveNewsList}/>
          <NewsSection emotion={false} newsList={negativeNewsList}/>
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