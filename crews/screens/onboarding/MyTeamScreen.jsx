import React,{ useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import data from '../../components/onboardingScreen/exampleData.json'
import { commonStyle, myTeamStyle, } from '../../styles/onboardingScreen/style';
import axios from 'axios';

import { useTeamData } from '../../components/onboardingScreen/context';

import SportTeam from '../../components/onboardingScreen/SportTeam';
import SportLeague from '../../components/onboardingScreen/SportLeague';
import SportCategory from '../../components/onboardingScreen/SportCategory';
import TeamNextBtn from '../../components/onboardingScreen/TeamNextBtn'

const MyTeam = ({swiper}) => {

const [leagueList, setLeagueList] = useState([])
const [teamList, setTeamList] = useState([]);

const [onSport, setOnSport] = useState('');
const [onLeague, setOnLeague] = useState('');

const { onTeamClick } = useTeamData();
const { teamData } = useTeamData();


useEffect(() => {
    const getLeagueList = async() => {
        try {
            const responseLeague = await axios.get(`https://crews.jongmin.xyz/data/league/list?sportsName=${onSport}`);

                // 성공적인 응답 처리
                setLeagueList(responseLeague.data);
                console.log("getLeagueList: 성공");

        } catch (error) {
            // Axios 오류 처리
            
            console.error(error);
            
        }
    };

    const getTeamList = async() => {
        try {
            const responseTeam = await axios.get(`https://crews.jongmin.xyz/data/team/list?leagueId=${onLeague}`);

                // 성공적인 응답 처리
                setTeamList(responseTeam.data);
                console.log("getTeamList: 성공");

        } catch (error) {
            // Axios 오류 처리
            console.error(error);
            console.error("Response status:", error.response.status);
        }
    };

    getLeagueList();
    getTeamList();

    console.log("onleague: ", onLeague);
}, [onSport, onLeague]);

const onClickSport = (selectedSport) => {
    setOnSport(selectedSport);
}



//const uniqueLeagueTitles = Array.from(new Set(filteredList.map(item => item.league))); // 중복 제거

const selectTeamClick = (selectedTeam) => {
    onTeamClick(selectedTeam);
};



return (
    <View style = {{flex:1}}>
        <ScrollView style>
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
                    marginBottom: 10,
                    marginTop: 25
                }}>
                    <SportCategory title = '국내축구' onPress = {() => onClickSport('Football')}/>
                    <SportCategory title = '국내야구' onPress = {() => onClickSport('Baseball')}/>
                    <SportCategory title = '국내농구' onPress = {() => onClickSport('Basketball')}/>
                    <SportCategory title = '해외축구' onPress = {() => onClickSport('Football')}/>
                    <SportCategory title = '해외야구' onPress = {() => onClickSport('Baseball')}/>
                    <SportCategory title = '해외농구' onPress = {() => onClickSport('Basketball')}/>
                </ScrollView>
                <ScrollView 
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                style = {{
                    flexDirection: 'row',
                    marginsTop: 5
                }}>
                    {
                    leagueList.map((leagueItem, index) => (
                        <SportLeague
                        title={leagueItem.leagueName}
                        key={index}
                        onPress={() => {setOnLeague(leagueItem.leagueId)}}
                        />
                    ))
                    }
                </ScrollView>
            </View>
            <View style = {[myTeamStyle.bottomView]}>

                    <View
                    style={[myTeamStyle.rowView]}>
                    {teamList.map((item,index) => (
                        <SportTeam
                        name={item.teamName}
                        key={index}
                        id={item.teamId}
                        onPress={() => {selectTeamClick(item.teamId);}}
                        />
                    ))}
                    </View> 
            </View>
        </ScrollView>
        <View style = {{alignItems: 'center'}}>
            <TeamNextBtn
                onPress = {() => swiper.current.scrollBy(1, true)}
                message = '팀을 선택해주세요'
            />
        </View>
    </View>
)
}

export default MyTeam;