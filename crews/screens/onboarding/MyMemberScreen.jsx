import React,{ useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { commonStyle, myMemberStyle } from '../../styles/onboardingScreen/style';
import axios from 'axios';

import data from '../../components/onboardingScreen/exampleData.json';

import { useTeamData, useMemberData } from '../../components/onboardingScreen/context';
import TeamMembers from '../../components/onboardingScreen/TeamMembers';
import MemberNextBtn from '../../components/onboardingScreen/MemberNextBtn';


const MyMember = ({swiper}) => {

    const [memberList, setMemberList] = useState([]);
    const [filteredList, setFilteredList] = useState(null)
 
    const { teamData } = useTeamData();
    const { onMemberClick } = useMemberData();
    


    useEffect(() => {
      const getMemberList = async() => {
        try {
            const responseMember = await axios.get('http://crews.jongmin.xyz:8080/data/player/list?teamId=7653');

                // 성공적인 응답 처리
                setMemberList(responseMember.data);
                console.log("getMemberList: 성공");
                console.log([memberList]);

        } catch (error) {
            // Axios 오류 처리
            
            console.error(error);
            
        }
      };

      getMemberList();

    }, []);


    

    console.log("memberList: ", filteredList);
    
    
   
    
    

    

    const onClick = (member) => {
      console.log("MyMemberScreen: ", member);
      onMemberClick(member);
    }


    return (
      <View style={{ flex: 1 }}>
        <View style = {[myMemberStyle.headerView]}>
            <Text style = {[commonStyle.boldText]}>좋아하는 선수를 선택해주세요</Text>
            <Text style = {[commonStyle.text]}>최애 선수에 대한 알림을 전달해드려요</Text>
        </View>
        <View style={[myMemberStyle.centerView]}>
          {teamData && (
            <View
              style={[myMemberStyle.teamImageView]}
            >
              <Text style={{ fontWeight: 'bold' }}>{teamData}</Text>
            </View>
          )}
        </View>
        <View style = {[myMemberStyle.line]}/>
        <View style={[myMemberStyle.bottomView]}>
          <ScrollView style = {{marginBottom : 10}}>
                <View
                  style={[myMemberStyle.rowView]}>
                    {filteredList && (filteredList.map(item => (
                    <TeamMembers
                    name={item.member}
                    key={item.id}
                    onPress={() => onClick(item.member)}
                    />
                )))}
                </View>
          </ScrollView>
          <MemberNextBtn
                onPress = {() => swiper.current.scrollBy(1, true)}
                message = '선수를 선택해주세요'
            />
        </View>
      </View>
    )
}

export default MyMember;