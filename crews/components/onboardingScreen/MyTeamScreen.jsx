import React,{ useState } from 'react';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import data from './exampleData.json'
import { commonStyle, myTeamStyle, } from '../../styles/onboardingScreen/style';

import { useTeamData } from './context';

import SportTeam from './SportTeam';
import SportLeague from './SportLeague';
import SportCategory from './SportCategory';

const MyTeam = () => {

const [filteredList, setFilteredList] = useState([]);
const [subCategoryData, setSubCategoryData] = useState([]);
const [sport, setSport] = useState(1);

const { onTeamClick } = useTeamData();
const { teamData } = useTeamData();

const onClick = (selectedSport) => {
    const updatedFilteredList = data.sport.filter(item => selectedSport === item.sport_id);
    setFilteredList(updatedFilteredList);
    setSport(selectedSport);
    setSubCategoryData([]);
}

const onClickLeague = (title) => {
    const leagueData = filteredList.filter(item => item.league === title && item.sport_id === sport);
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
            <ScrollView>
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
        </View>
    </View>
)
}

export default MyTeam;