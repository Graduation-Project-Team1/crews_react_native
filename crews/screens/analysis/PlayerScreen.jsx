import React, {useEffect,useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import PositionText from '../../components/analysisScreen/playerScreen/PositionText';
import PlayerInfo from '../../components/analysisScreen/playerScreen/PlayerInfo';

const PlayerScreen = () => {
  const [playerData, setPlayerData] = useState([]);
  const [outfieldData, setOutfieldData] = useState([]);
  const [keeperData,setKeeperData] = useState([]);

  //선수리스트
  const [names, setNames] = useState([]);
  const [ages, setAges] = useState([]);
  const [birthdays, setBirthdays] = useState([]);
  const [heights, setHeights] = useState([]);
  const [shirtNumbers, setShirtNumbers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [nations, setNations] = useState([]);
  //outfield 통계
  const [goals, setGoals] = useState([]);
  const [assists, setAssists] = useState([]);
  const [bigChancesCreated, setBigChancesCreated] = useState([]);
  const [outfieldTotalShots, setOutfieldTotalShots] = useState([]);
  const [outfieldFouls, setOutfieldFouls] = useState([]);
  const [outfieldYellowCards, setOutfieldYellowCards] = useState([]);
  const [outfieldRedCards, setOutfieldRedCards] = useState([]);
  const [outfieldPenaltyGoals, setOutfieldPenaltyGoals] = useState([]);
  const [shotsOnTarget, setShotsOnTarget] = useState([]);
  const [outfieldAppearances, setOutfieldAppearances] = useState([]);  
  //골키퍼 통계
  const [saves, setSaves] = useState([]);
  const [goalConceded, setGoalConceded] = useState([]);
  const [cleanSheet, setCleanSheet] = useState([]);
  const [keeperTotalShots, setKeeperTotalShots] = useState([]);
  const [keeperFouls, setKeeperFouls] = useState([]);
  const [keeperYellowCards, setKeeperYellowCards] = useState([]);
  const [keeperRedCards, setKeeperRedCards] = useState([]);
  const [keeperPenaltyGoals, setKeeperPenaltyGoals] = useState([]);
  const [keeperAppearances, setKeeperAppearances] = useState([]);  
  useEffect(() => {
    // API 엔드포인트에서 데이터 가져오기
    axios.get("http://crews.jongmin.xyz:8080/data/player/list?teamId=7653")
      .then((response) => {
        // 데이터를 state에 설정
        setPlayerData(response.data);
        // 각 필드를 별도의 배열에 저장
        setNames(response.data.map(player => player.name));
        setAges(response.data.map(player => player.age));
        setBirthdays(response.data.map(player => player.dateOfBirth.split('T')[0]));
        setHeights(response.data.map(player => player.height));
        setShirtNumbers(response.data.map(player => player.shirtNumber));
        setPositions(response.data.map(player => player.position));
        setNations(response.data.map(player => player.nation));
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
     
    
    //outfield
    axios.get("http://18.181.69.27:8080/data/record?isGoalkeeper=0")
      .then((response) => {
        setOutfieldData(response.data);
        // 각 필드를 별도의 배열에 저장
        setGoals(response.data.map(outfield => outfield.goal));
        setAssists(response.data.map(outfield => outfield.assist));
        setBigChancesCreated(response.data.map(outfield => outfield.bigChancesCreated));
        setOutfieldTotalShots(response.data.map(outfield => outfield.totalShot));
        setOutfieldFouls(response.data.map(outfield => outfield.foul));
        setOutfieldYellowCards(response.data.map(outfield => outfield.yellowCard));
        setOutfieldRedCards(response.data.map(outfield => outfield.redCard));
        setOutfieldPenaltyGoals(response.data.map(outfield => outfield.penaltyGoal));
        setShotsOnTarget(response.data.map(outfield => outfield.shotsOnTarget));
        setOutfieldAppearances(response.data.map(outfield => outfield.appearance));
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
      
    //keeper
    axios.get("http://18.181.69.27:8080/data/record?isGoalkeeper=1")
      .then((response) => {
        setKeeperData(response.data);
        
        setSaves(response.data.map(keeper => keeper.save));
        setGoalConceded(response.data.map(keeper => keeper.goalConceded));
        setCleanSheet(response.data.map(keeper => keeper.cleanSheet));
        setKeeperTotalShots(response.data.map(keeper => keeper.totalShot));
        setKeeperFouls(response.data.map(keeper => keeper.foul));
        setKeeperYellowCards(response.data.map(keeper => keeper.yellowCard));
        setKeeperRedCards(response.data.map(keeper => keeper.redCard));
        setKeeperPenaltyGoals(response.data.map(keeper => keeper.penaltyGoal));
        setKeeperAppearances(response.data.map(keeper => keeper.appearance));
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []); // 빈 배열을 전달하여 componentDidMount와 같은 효과를 얻습니다.

  


  const statInfo = [
  ["포지션","선방","무실점경기","슈팅","파울","경고","퇴장","경기수"],  
  ["포지션", "득점","도움", "공격포인트", "슈팅","파울", "경고", "퇴장","패널티킥", "유효 슈팅", "경기수"],
  [names[0],"GK",getValueOrLoading(keeperData[0],'saves'),getValueOrLoading(keeperData[0],'goalConceded'),getValueOrLoading(keeperData[0],'cleanSheet'),getValueOrLoading(keeperData[0],'totalShots'),getValueOrLoading(keeperData[0],'fouls'),getValueOrLoading(keeperData[0],'yellowCards'),getValueOrLoading(keeperData[0],'redCards'),getValueOrLoading(keeperData[0],'penaltyGoals'),getValueOrLoading(keeperData[0],'appearances')],
  [names[1],"GK",getValueOrLoading(keeperData[1],'saves'),getValueOrLoading(keeperData[1],'goalConceded'),getValueOrLoading(keeperData[1],'cleanSheet'),getValueOrLoading(keeperData[1],'totalShots'),getValueOrLoading(keeperData[1],'fouls'),getValueOrLoading(keeperData[1],'yellowCards'),getValueOrLoading(keeperData[1],'redCards'),getValueOrLoading(keeperData[1],'penaltyGoals'),getValueOrLoading(keeperData[1],'appearances')],
  [names[2],"DF",getValueOrLoading(outfieldData[0],'goals'),getValueOrLoading(outfieldData[0],'assists'),getValueOrLoading(outfieldData[0],'bigChancesCreated'),getValueOrLoading(outfieldData[0],'totalShots'),getValueOrLoading(outfieldData[0],'fouls'),getValueOrLoading(outfieldData[0],'yellowCards'),getValueOrLoading(outfieldData[0],'redCards'),getValueOrLoading(outfieldData[0],'penaltyGoals'),getValueOrLoading(outfieldData[0],'shotsOnTarget'),getValueOrLoading(outfieldData[0],'appearances')],
  [names[3],"DF",getValueOrLoading(outfieldData[1],'goals'),getValueOrLoading(outfieldData[1],'assists'),getValueOrLoading(outfieldData[1],'bigChancesCreated'),getValueOrLoading(outfieldData[1],'totalShots'),getValueOrLoading(outfieldData[1],'fouls'),getValueOrLoading(outfieldData[1],'yellowCards'),getValueOrLoading(outfieldData[1],'redCards'),getValueOrLoading(outfieldData[1],'penaltyGoals'),getValueOrLoading(outfieldData[1],'shotsOnTarget'),getValueOrLoading(outfieldData[1],'appearances')],
  [names[4],"DF",getValueOrLoading(outfieldData[2],'goals'),getValueOrLoading(outfieldData[2],'assists'),getValueOrLoading(outfieldData[2],'bigChancesCreated'),getValueOrLoading(outfieldData[2],'totalShots'),getValueOrLoading(outfieldData[2],'fouls'),getValueOrLoading(outfieldData[2],'yellowCards'),getValueOrLoading(outfieldData[2],'redCards'),getValueOrLoading(outfieldData[2],'penaltyGoals'),getValueOrLoading(outfieldData[2],'shotsOnTarget'),getValueOrLoading(outfieldData[2],'appearances')],
  [names[5],"DF",getValueOrLoading(outfieldData[3],'goals'),getValueOrLoading(outfieldData[3],'assists'),getValueOrLoading(outfieldData[3],'bigChancesCreated'),getValueOrLoading(outfieldData[3],'totalShots'),getValueOrLoading(outfieldData[3],'fouls'),getValueOrLoading(outfieldData[3],'yellowCards'),getValueOrLoading(outfieldData[3],'redCards'),getValueOrLoading(outfieldData[3],'penaltyGoals'),getValueOrLoading(outfieldData[3],'shotsOnTarget'),getValueOrLoading(outfieldData[3],'appearances')],
  [names[6],"DF",getValueOrLoading(outfieldData[4],'goals'),getValueOrLoading(outfieldData[4],'assists'),getValueOrLoading(outfieldData[4],'bigChancesCreated'),getValueOrLoading(outfieldData[4],'totalShots'),getValueOrLoading(outfieldData[4],'fouls'),getValueOrLoading(outfieldData[4],'yellowCards'),getValueOrLoading(outfieldData[4],'redCards'),getValueOrLoading(outfieldData[4],'penaltyGoals'),getValueOrLoading(outfieldData[4],'shotsOnTarget'),getValueOrLoading(outfieldData[4],'appearances')],
  [names[7],"DF",getValueOrLoading(outfieldData[5],'goals'),getValueOrLoading(outfieldData[5],'assists'),getValueOrLoading(outfieldData[5],'bigChancesCreated'),getValueOrLoading(outfieldData[5],'totalShots'),getValueOrLoading(outfieldData[5],'fouls'),getValueOrLoading(outfieldData[5],'yellowCards'),getValueOrLoading(outfieldData[5],'redCards'),getValueOrLoading(outfieldData[5],'penaltyGoals'),getValueOrLoading(outfieldData[5],'shotsOnTarget'),getValueOrLoading(outfieldData[5],'appearances')],
  [names[8],"DF",getValueOrLoading(outfieldData[6],'goals'),getValueOrLoading(outfieldData[6],'assists'),getValueOrLoading(outfieldData[6],'bigChancesCreated'),getValueOrLoading(outfieldData[6],'totalShots'),getValueOrLoading(outfieldData[6],'fouls'),getValueOrLoading(outfieldData[6],'yellowCards'),getValueOrLoading(outfieldData[6],'redCards'),getValueOrLoading(outfieldData[6],'penaltyGoals'),getValueOrLoading(outfieldData[6],'shotsOnTarget'),getValueOrLoading(outfieldData[6],'appearances')],
  [names[9],"DF",getValueOrLoading(outfieldData[7],'goals'),getValueOrLoading(outfieldData[7],'assists'),getValueOrLoading(outfieldData[7],'bigChancesCreated'),getValueOrLoading(outfieldData[7],'totalShots'),getValueOrLoading(outfieldData[7],'fouls'),getValueOrLoading(outfieldData[7],'yellowCards'),getValueOrLoading(outfieldData[7],'redCards'),getValueOrLoading(outfieldData[7],'penaltyGoals'),getValueOrLoading(outfieldData[7],'shotsOnTarget'),getValueOrLoading(outfieldData[7],'appearances')],
  [names[10],"DF",getValueOrLoading(outfieldData[8],'goals'),getValueOrLoading(outfieldData[8],'assists'),getValueOrLoading(outfieldData[8],'bigChancesCreated'),getValueOrLoading(outfieldData[8],'totalShots'),getValueOrLoading(outfieldData[8],'fouls'),getValueOrLoading(outfieldData[8],'yellowCards'),getValueOrLoading(outfieldData[8],'redCards'),getValueOrLoading(outfieldData[8],'penaltyGoals'),getValueOrLoading(outfieldData[8],'shotsOnTarget'),getValueOrLoading(outfieldData[8],'appearances')],
  [names[11],"DF",getValueOrLoading(outfieldData[9],'goals'),getValueOrLoading(outfieldData[9],'assists'),getValueOrLoading(outfieldData[9],'bigChancesCreated'),getValueOrLoading(outfieldData[9],'totalShots'),getValueOrLoading(outfieldData[9],'fouls'),getValueOrLoading(outfieldData[9],'yellowCards'),getValueOrLoading(outfieldData[9],'redCards'),getValueOrLoading(outfieldData[9],'penaltyGoals'),getValueOrLoading(outfieldData[9],'shotsOnTarget'),getValueOrLoading(outfieldData[9],'appearances')],
  [names[12],"DF",getValueOrLoading(outfieldData[4],'goals'),getValueOrLoading(outfieldData[4],'assists'),getValueOrLoading(outfieldData[4],'bigChancesCreated'),getValueOrLoading(outfieldData[4],'totalShots'),getValueOrLoading(outfieldData[4],'fouls'),getValueOrLoading(outfieldData[4],'yellowCards'),getValueOrLoading(outfieldData[4],'redCards'),getValueOrLoading(outfieldData[10],'penaltyGoals'),getValueOrLoading(outfieldData[10],'shotsOnTarget'),getValueOrLoading(outfieldData[10],'appearances')],
  [names[13],"MF",goals[11],assists[11],bigChancesCreated[11],outfieldTotalShots[11],outfieldFouls[11],outfieldYellowCards[11],outfieldRedCards[11],outfieldPenaltyGoals[11],shotsOnTarget[11],outfieldAppearances[11]],
  [names[14],"MF",goals[12],assists[12],bigChancesCreated[12],outfieldTotalShots[12],outfieldFouls[12],outfieldYellowCards[12],outfieldRedCards[12],outfieldPenaltyGoals[12],shotsOnTarget[12],outfieldAppearances[12]],
  [names[15],"MF",goals[13],assists[13],bigChancesCreated[13],outfieldTotalShots[13],outfieldFouls[13],outfieldYellowCards[13],outfieldRedCards[13],outfieldPenaltyGoals[13],shotsOnTarget[13],outfieldAppearances[13]],
  [names[16],"MF",goals[14],assists[14],bigChancesCreated[14],outfieldTotalShots[14],outfieldFouls[14],outfieldYellowCards[14],outfieldRedCards[14],outfieldPenaltyGoals[14],shotsOnTarget[14],outfieldAppearances[14]],
  [names[17],"MF",goals[15],assists[15],bigChancesCreated[15],outfieldTotalShots[15],outfieldFouls[15],outfieldYellowCards[15],outfieldRedCards[15],outfieldPenaltyGoals[15],shotsOnTarget[15],outfieldAppearances[15]],
  [names[18],"MF",goals[16],assists[16],bigChancesCreated[16],outfieldTotalShots[16],outfieldFouls[16],outfieldYellowCards[16],outfieldRedCards[160],outfieldPenaltyGoals[16],shotsOnTarget[16],outfieldAppearances[16]],
  [names[19],"MF",goals[17],assists[17],bigChancesCreated[17],outfieldTotalShots[17],outfieldFouls[17],outfieldYellowCards[17],outfieldRedCards[17],outfieldPenaltyGoals[17],shotsOnTarget[17],outfieldAppearances[17]],
  [names[20],"MF",goals[18],assists[18],bigChancesCreated[18],outfieldTotalShots[18],outfieldFouls[18],outfieldYellowCards[18],outfieldRedCards[18],outfieldPenaltyGoals[18],shotsOnTarget[18],outfieldAppearances[18]],
  [names[21],"ATK",goals[19],assists[19 ],bigChancesCreated[19],outfieldTotalShots[19],outfieldFouls[19],outfieldYellowCards[19],outfieldRedCards[19],outfieldPenaltyGoals[19],shotsOnTarget[19],outfieldAppearances[19]],
  [names[22],"ATK",goals[20],assists[20],bigChancesCreated[20],outfieldTotalShots[20],outfieldFouls[20],outfieldYellowCards[20],outfieldRedCards[20],outfieldPenaltyGoals[20],shotsOnTarget[20],outfieldAppearances[20]],
  [names[23],"ATK",goals[21],assists[21],bigChancesCreated[21],outfieldTotalShots[21],outfieldFouls[21],outfieldYellowCards[21],outfieldRedCards[21],outfieldPenaltyGoals[21],shotsOnTarget[21],outfieldAppearances[21]],
  [names[24],"ATK",goals[22],assists[22],bigChancesCreated[22],outfieldTotalShots[22],outfieldFouls[22],outfieldYellowCards[22],outfieldRedCards[22],outfieldPenaltyGoals[22],shotsOnTarget[22],outfieldAppearances[22]],
  [names[25],"ATK",goals[23],assists[23],bigChancesCreated[23],outfieldTotalShots[23],outfieldFouls[23],outfieldYellowCards[23],outfieldRedCards[23],outfieldPenaltyGoals[23],shotsOnTarget[23],outfieldAppearances[23]],
  [names[26],"ATK",goals[24],assists[24],bigChancesCreated[24],outfieldTotalShots[24],outfieldFouls[24],outfieldYellowCards[24],outfieldRedCards[24],outfieldPenaltyGoals[24],shotsOnTarget[24],outfieldAppearances[24]],
  [names[27],"ATK",goals[25],assists[25],bigChancesCreated[25],outfieldTotalShots[25],outfieldFouls[25],outfieldYellowCards[25],outfieldRedCards[25],outfieldPenaltyGoals[25],shotsOnTarget[25],outfieldAppearances[25]],];


  return (
  <ScrollView vertical={true}>
    <View style={{ flexDirection: "column" }}>
      <PlayerInfo statInfo={statInfo} />
    </View>
  </ScrollView>
  );
};
function getValueOrLoading(data, property) {
    return data && data[property] ? data[property] : 'Loading...';
}

export default PlayerScreen;

