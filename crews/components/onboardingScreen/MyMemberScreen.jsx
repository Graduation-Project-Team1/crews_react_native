import React,{ useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { commonStyle, myMemberStyle } from '../../styles/onboardingScreen/style';

import { useTeamData } from './context';
import TeamMembers from './TeamMember';


const MyMember = () => {

    const {teamData} = useTeamData();
  
    useEffect(() => {
    }, [teamData]);
  
  
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
          <ScrollView>
                <View
                  style={[myMemberStyle.rowView]}>
                    <TeamMembers name= '이름'/>
                    <TeamMembers name= '이름'/>
                    <TeamMembers name= '이름'/>
                    <TeamMembers name= '이름'/>
                </View>
              </ScrollView>
        </View>
      </View>
    )
}

export default MyMember;