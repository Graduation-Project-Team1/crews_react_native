import React,{ useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import data from '../../components/onboardingScreen/exampleData.json'
import { commonStyle, myTeamStyle, } from '../../styles/onboardingScreen/style';

import { useTeamData } from '../../components/onboardingScreen/context';

import SportTeam from '../../components/onboardingScreen/SportTeam';
import SportLeague from '../../components/onboardingScreen/SportLeague';
import SportCategory from '../../components/onboardingScreen/SportCategory';
import TeamNextBtn from '../../components/onboardingScreen/TeamNextBtn'

const MyTeam = ({swiper}) => {

const [teamList, setTeamList] = useState(data.sport);
const [filteredList, setFilteredList] = useState([]);
const [subCategoryData, setSubCategoryData] = useState([]);
const [sport, setSport] = useState(1);

const { onTeamClick } = useTeamData();
const { teamData } = useTeamData();

async function getTeamList() {
    try {
      //응답 성공
      const response = await axios.get('');
      setTeamList(response);
      console.log(response);
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }

useEffect(() => {
    console.log("MyTeamScreen: teamList 데이터가 변경됨(*화면 실행시에도 이 메세지가 출력됨)")
}, [teamList]);

const onClick = (selectedSport) => {
    const updatedFilteredList = teamList.filter(item => selectedSport === item.sport_id);
    setFilteredList(updatedFilteredList);
    setSubCategoryData([]);
}

const onClickLeague = (title) => {
    const leagueData = filteredList.filter(item => item.league === title);
    setSubCategoryData(leagueData);
}

const uniqueLeagueTitles = Array.from(new Set(filteredList.map(item => item.league))); // 중복 제거

const selectTeamClick = (selectedTeam) => {
    onTeamClick(selectedTeam);
};



return (
    <View style = {{flex:1}}>
        <View style = {[myTeamStyle.headerView]}>
            <Text style = {[commonStyle.boldText]}>어느 팀을 좋아하시나요?</Text>
            <Text style = {[commonStyle.text]}>당신의 팀에 대한 소식을 전달해드려요</Text>
        </View>
        <View style = {[myTeamStyle.categoryMenuView]}>
            <ScrollView 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            style = {{
                flexDirection: 'row',
            }}>
                <SportCategory title = '국내축구' onPress = {() => onClick(1)}/>
                <SportCategory title = '국내야구' onPress = {() => onClick(2)}/>
                <SportCategory title = '국내농구' onPress = {() => onClick(3)}/>
                <SportCategory title = '해외축구' onPress = {() => onClick(4)}/>
                <SportCategory title = '해외야구' onPress = {() => onClick(5)}/>
                <SportCategory title = '해외농구' onPress = {() => onClick(6)}/>
            </ScrollView>
            <ScrollView 
            horizontal = {true}
            showsHorizontalScrollIndicator = {false}
            style = {{
                flexDirection: 'row',
                marginsTop: 5
            }}>
                {
                uniqueLeagueTitles.map(title => (
                    <SportLeague
                    title={title}
                    key={title}
                    onPress={() => onClickLeague(title)}
                    />
                ))
                }
            </ScrollView>
        </View>
        <View style = {[myTeamStyle.bottomView]}>
            <ScrollView style = {{marginBottom : 10}}>
                <View
                style={[myTeamStyle.rowView]}>
                {subCategoryData.map(item => (
                    <SportTeam
                    name={item.team}
                    key={item.id}
                    onPress={() => selectTeamClick(item.team)}
                    />
                ))}
                </View>
            </ScrollView>
            <TeamNextBtn
                onPress = {() => swiper.current.scrollBy(1, true)}
                message = '팀을 선택해주세요'
            />
        </View>
        
    </View>
)
}

export default MyTeam;