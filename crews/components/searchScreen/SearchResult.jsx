import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { searchResultStyles } from "../../styles/searchScreen/searchResult";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import NewsBox from "../newsScreen/NewsBox";
import RadioResult from "./RadioResult";
import MatchResult from "./MatchResult";

const SearchResult = ({result}) => {
  return (
    <View style={searchResultStyles.layout}>
      <ScrollView>
        <View>
          <Text style={searchResultStyles.grayText}>{`다른 팀이 궁금하신가요?\n내 팀을 변경하지 않고 다른 팀을 구경해보세요.`}</Text>
          <View style={searchResultStyles.team}>
            <Image 
              source={{uri: 'https://blog.kakaocdn.net/dn/kWr1v/btqyqdOcKUZ/5bqzHwqJJdKvPBU4ekM1WK/img.jpg'}}
              style={searchResultStyles.teamImg}/>
            <View style={searchResultStyles.teamInfo}>
              <Text style={searchResultStyles.teamTitle}>FC 서울</Text>
              <Text style={searchResultStyles.teamCategory}>국내 축구</Text>
            </View>
            <FontAwesomeIcon icon={faChevronRight} size={20}/>
          </View>
        </View>
        <View style={searchResultStyles.divider}/>
        <View style={searchResultStyles.contentContainer}>
          <Text style={searchResultStyles.headerText}>뉴스</Text>
          <View>
            <NewsBox rank={1} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
            <NewsBox rank={2} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
            <NewsBox rank={3} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
          </View>
        </View>
        <View style={searchResultStyles.contentContainer}>
          <Text style={searchResultStyles.headerText}>라디오</Text>
          <View>
            <RadioResult rank={1} title={'2023.05.22 (월)'} tags={['승리', '연승', '패배']}/>
            <RadioResult rank={2} title={'2023.05.22 (월)'} tags={['승리', '연승', '패배']}/>
            <RadioResult rank={3} title={'2023.05.22 (월)'} tags={['승리', '연승', '패배']}/>
          </View>
        </View>
        <View style={searchResultStyles.contentContainer}>
          <Text style={searchResultStyles.headerText}>경기 정보</Text>
          <View>
            <MatchResult 
              date={'2023.05.22 (월)'} 
              score={[1,0]} 
              team1={'https://yt3.googleusercontent.com/LoJX3yKY2JEnaTdlb4Era-RJcj6GO7zwl2AQ_aEn1UADu7qOwXmuEzuopqOsT43hKhbb1piQmw=s900-c-k-c0x00ffffff-no-rj'} 
              team2={'https://play-lh.googleusercontent.com/BIP7NoE_kbtU5HTrMVkHKapwsUW3JBxOn-FAYNS9lA7xLQrzqGbU9GXo-L5euU-qu-L0'}/>
            <MatchResult 
              date={'2023.05.22 (월)'} 
              score={[1,0]} 
              team1={'https://yt3.googleusercontent.com/LoJX3yKY2JEnaTdlb4Era-RJcj6GO7zwl2AQ_aEn1UADu7qOwXmuEzuopqOsT43hKhbb1piQmw=s900-c-k-c0x00ffffff-no-rj'} 
              team2={'https://play-lh.googleusercontent.com/BIP7NoE_kbtU5HTrMVkHKapwsUW3JBxOn-FAYNS9lA7xLQrzqGbU9GXo-L5euU-qu-L0'}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchResult;
