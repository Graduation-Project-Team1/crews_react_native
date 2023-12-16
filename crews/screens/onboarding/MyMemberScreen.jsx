import React,{ useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import { commonStyle, myMemberStyle } from '../../styles/onboardingScreen/style';
import axios from 'axios';
import { useTeamData, useMemberData } from '../../components/onboardingScreen/context';
import TeamMembers from '../../components/onboardingScreen/TeamMembers';
import MemberNextBtn from '../../components/onboardingScreen/MemberNextBtn';
import Team6908 from '../../assets/team/6908.png';
import Team7644 from '../../assets/team/7644.png';
import Team7645 from '../../assets/team/7645.png';
import Team7646 from '../../assets/team/7646.png';
import Team7648 from '../../assets/team/7648.png';
import Team7649 from '../../assets/team/7649.png';
import Team7652 from '../../assets/team/7652.png';
import Team7653 from '../../assets/team/7653.png';
import Team7650 from '../../assets/team/7650.png';
import Team34220 from '../../assets/team/34220.png';
import Team41261 from '../../assets/team/41261.png';
import Team48912 from '../../assets/team/48912.png';


const MyMember = ({swiper}) => {

    const [memberList, setMemberList] = useState([]);
 
    const { teamData } = useTeamData();
    const { onMemberClick } = useMemberData();

    useEffect(() => {
      if (teamData === '') return;

      const getMemberList = async() => {
        try {
            const responseMember = await axios.get(`https://crews.jongmin.xyz/data/player/list?teamId=${teamData}`)
                .then((response) => {
                    // 성공적인 응답 처리
                    setMemberList(response.data);
                    console.log("getMemberList: 성공");
                })
                .catch((error) => {
                    console.log("error: ", error);
                })

        } catch (error) {
            // Axios 오류 처리
            
            console.error(error);
            
        }
      };

      getMemberList();

    }, [teamData]);

    const imgSrc = (teamId) => {
        switch (teamId) {
            case 6908:
                return Team6908;
            case 7644:
                return Team7644;
            case 7645:
                return Team7645;
            case 7646:
                return Team7646;
            case 7648:
                return Team7648;
            case 7649:
                return Team7649;
            case 7652:
                return Team7652;
            case 7653:
                return Team7653;
            case 7650:
                return Team7650;
            case 34220:
                return Team34220;
            case 41261:
                return Team41261;
            case 48912:
                return Team48912;
            default:
                return Team6908;
        }
    }

    const onClick = (member) => {
      console.log("MyMemberScreen: ", member);
      onMemberClick(member);
    }


    return (
      <View style={{ flex: 1 }}>
        <ScrollView style = {{paddingBottom : 10}}>
          <View style = {[myMemberStyle.headerView]}>
              <Text style = {[commonStyle.boldText]}>좋아하는 선수를 선택해주세요</Text>
              <Text style = {[commonStyle.text]}>최애 선수에 대한 알림을 전달해드려요</Text>
          </View>
          <View style={[myMemberStyle.centerView]}>
            {teamData && (
              <>
              <Image
                style={[myMemberStyle.teamImageView]}
                source={imgSrc(teamData)}
              />
              <Text style={{ fontWeight: 'bold' }}>{teamData}</Text>
              </>
            )}
          </View>
          <View style = {[myMemberStyle.line]}/>
          <View style={[myMemberStyle.bottomView]}>
            
                  <View
                    style={[myMemberStyle.rowView]}>
                      {memberList.map(item => (
                      <TeamMembers
                      name={item.name}
                      key={item.id}
                      id={item.id}
                      photo={item.photo}
                      onPress={() => onClick(item.id)}
                      />
                  ))}
                  </View>
            
            
          </View>
        </ScrollView>
        <View style = {{alignItems: 'center'}}>
          <MemberNextBtn
                  onPress = {() => swiper.current.scrollBy(1, true)}
                  message = '선수를 선택해주세요'
              />
        </View>
      </View>
    )
}

export default MyMember;