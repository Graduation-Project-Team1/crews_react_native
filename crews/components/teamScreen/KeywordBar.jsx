import React, { useState,useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { ThemeContext } from "styled-components/native";
import KeywordBox from "./KeywordBox";
import KeywordName from "./KeywordName";
import PositiveContent from "./PositiveContent";
import NegativeContent from "./NegativeContent";

const KeywordBar = ({teamTrend}) => {
  const [selectedBar, setSelectedBar] = useState(0); // 초기값 0으로 설정
  const theme = useContext(ThemeContext);

  const handleBarClick = (barIndex) => {
    setSelectedBar(barIndex);
  };

  const bars = teamTrend.map(item => ({
    backgroundColor: item.teamColor, // API 데이터에 따라 적절한 속성 사용
    height: (6 - item.trendRanking) * 20, // trendRanking을 바탕으로 높이 계산
    marginTop: 0
  }));

  const ranks = teamTrend.map(item => item.trendRanking);
  const mentions = teamTrend.map(item => item.mentions);
  const moods = teamTrend.map(item => item.comments);

  const pTitle1 = teamTrend.map(item => item.positiveNewsTitle1);
  const pCreated1 = teamTrend.map(item => item.positiveNewsCreated);
  const pImg1 = teamTrend.map(item => item.positiveNewsImg1);
  const pUrl1 = teamTrend.map(item => item.positiveNewsUrl1);

  const pTitle2 = teamTrend.map(item => item.positiveNewsTitle2);
  const pCreated2 = teamTrend.map(item => item.positiveNewsCreated2);
  const pImg2 = teamTrend.map(item => item.positiveNewsImg2);
  const pUrl2 = teamTrend.map(item => item.positiveNewsUrl2);
  
  const pTitle3 = teamTrend.map(item => item.positiveNewsTitle3);
  const pCreated3 = teamTrend.map(item => item.positiveNewsCreated3);
  const pImg3 = teamTrend.map(item => item.positiveNewsImg3);
  const pUrl3 = teamTrend.map(item => item.positiveNewsUrl3);


  const nTitle1 = teamTrend.map(item => item.negativeNewsTitle1);
  const nCreated1 = teamTrend.map(item => item.neagtiveNewsCreated1);
  const nImg1 = teamTrend.map(item => item.negativeNewsImg1);
  const nUrl1 = teamTrend.map(item => item.negativeNewsUrl1);

  const nTitle2 = teamTrend.map(item => item.negativeNewsTitle2);
  const nCreated2 = teamTrend.map(item => item.negativeNewsCreated2);
  const nImg2 = teamTrend.map(item => item.negativeNewsImg2);
  const nUrl2 = teamTrend.map(item => item.negativeNewsUrl2);
  
  const nTitle3 = teamTrend.map(item => item.negativeNewsTitle3);
  const nCreated3 = teamTrend.map(item => item.negativeNewsCreated3);
  const nImg3 = teamTrend.map(item => item.negativeNewsImg3);
  const nUrl3 = teamTrend.map(item => item.negativeNewsUrl3);

  return (
    <View style={{paddingBottom: 100}}>
      <View style={{flexDirection: "row",justifyContent: "space-around",}}>
        {bars.map((bar, index) => {
          const adjustedBackgroundColor =
            selectedBar !== null && selectedBar !== index? `${bar.backgroundColor}77`: bar.backgroundColor;
          return (
            <TouchableOpacity key={index} onPress={() => handleBarClick(index)}activeOpacity={0.7}>
              <Text style={{marginTop: 50 + index * 20,marginLeft: 5,marginBottom: 5,color:theme.text}}>
                {index + 1}
              </Text>
              <View style={{borderTopLeftRadius: 5,borderTopRightRadius: 5,height: bar.height,width: 20,backgroundColor: adjustedBackgroundColor, marginTop: bar.marginTop,}}>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ height: 1, backgroundColor: '#E5E9EF' }} />
      <KeywordName />
      <View>
        {selectedBar !== null && (
          <KeywordBox rank={ranks[selectedBar]} mentions={mentions[selectedBar]} mood={moods[selectedBar]}/>
        )}
      </View>
      <View>
        {selectedBar !== null && (
          <PositiveContent title1={pTitle1[selectedBar]} created1={pCreated1[selectedBar]} img1={pImg1[selectedBar]} url1={pUrl1[selectedBar]}
          title2={pTitle2[selectedBar]} created2={pCreated2[selectedBar]} img2={pImg2[selectedBar]} url2={pUrl2[selectedBar]}
          title3={pTitle3[selectedBar]} created3={pCreated3[selectedBar]} img3={pImg3[selectedBar]} url3={pUrl3[selectedBar]}
          />
        )}
      </View>
      <View>
        {selectedBar !== null && (
          <NegativeContent title1={nTitle1[selectedBar]} created1={nCreated1[selectedBar]} img1={nImg1[selectedBar]} url1={nUrl1[selectedBar]}
          title2={nTitle2[selectedBar]} created2={nCreated2[selectedBar]} img2={nImg2[selectedBar]} url2={nUrl2[selectedBar]}
          title3={nTitle3[selectedBar]} created3={nCreated3[selectedBar]} img3={nImg3[selectedBar]} url3={nUrl3[selectedBar]} />
        )}
      </View>
      
    </View>
  );
};

export default KeywordBar;
