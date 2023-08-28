import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../../styles/styles";
import { newsBoxStyles, newsScreenStyles } from "../../styles/newsScreen/newsScreenStyles";
import Tag from "../../components/common/Tag";
import IssueBox from "../../components/newsScreen/IssueBox";
import CommunityBox from "../../components/newsScreen/CommunityBox";
import NewsBox from "../../components/newsScreen/NewsBox";

const NewsScreen = () => {
  const [value, setValue] = useState('인스타그램')
  return (
    <View style={[styles.layout]}>
      <StatusBar style='auto'/>
      <ScrollView style={styles.scrollContainer}>
        <View style={newsScreenStyles.layout}>
          <Text style={newsScreenStyles.header}>SNS 핫이슈</Text>
          <View style={newsScreenStyles.tagContainer}>
            <Tag isSelected={value === '트위터'} text={'트위터'} onPress={()=>setValue('트위터')}/>
            <Tag isSelected={value === '인스타그램'} text={'인스타그램'} onPress={()=>setValue('인스타그램')}/>
            <Tag isSelected={value === '레딧'} text={'레딧'} onPress={()=>setValue('레딧')}/>
          </View>
          <View style={newsScreenStyles.contentContainer}>
            <IssueBox name={'닉네임'} id={'nickname'} content={'대충 내용'} like={650} time={'2023.08.01 17:53'} brand={'instagram'}/>
          </View>
          <Text style={newsScreenStyles.header}>커뮤니티 핫이슈</Text>
          <ScrollView horizontal={true} style={newsScreenStyles.contentContainer} showsHorizontalScrollIndicator={false}>
            <CommunityBox community={'mlbpark'} title={'이번 경기 어떨까'} writer='익명'/>
            <CommunityBox community={'facebook'} title={'이번 경기 어떨까'} writer='익명'/>
            <CommunityBox community={'dcinside'} title={'이번 경기 어떨까'} writer='익명'/>
            <View style={{width: 16}}/>
          </ScrollView>
          <View style={newsScreenStyles.divider}/>
          <Text style={newsScreenStyles.header}>긍정적 뉴스</Text>
          <View style={newsBoxStyles.container}>
            <NewsBox rank={1} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
            <NewsBox rank={2} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
            <NewsBox rank={3} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
          </View>
          <Text style={newsScreenStyles.header}>부정적 뉴스</Text>
          <View style={newsBoxStyles.container}>
            <NewsBox rank={1} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
            <NewsBox rank={2} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
            <NewsBox rank={3} title={`'엄원상 결승골' 울산, 전북과 '현대가 맞대결' 1-0 승리(종합)`} time={'2023-08-19 21:54'} view={53} news={'https://blog.kakaocdn.net/dn/c4Azye/btqw1uKqkc0/e8lOG3KX2vCq4KS7szMoiK/img.jpg'}/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewsScreen;
