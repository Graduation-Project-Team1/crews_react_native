import React, {useEffect,useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import PositionText from '../../components/analysisScreen/playerScreen/PositionText';
import PlayerInfo from '../../components/analysisScreen/playerScreen/PlayerInfo';

const PlayerScreen = () => {
  const [playerData, setPlayerData] = useState([]);
  const [defenderData, setDefenderData] = useState([]);
  const [midfielderData, setMidfielderData] = useState([]);
  const [attackerData, setAttackerData] = useState([]);
  

  const [keeperData,setKeeperData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const playerResponse = await axios.get("https://crews.jongmin.xyz/data/player/list?teamId=7653");
        const keeperResponse = await axios.get("https://crews.jongmin.xyz/data/record?playerId=872090");
        const defenderResponse = await axios.get("https://crews.jongmin.xyz/data/record?playerId=99963");
        const midfielderResponse = await axios.get("https://crews.jongmin.xyz/data/record?playerId=38642");
        const attackerResponse = await axios.get("https://crews.jongmin.xyz/data/record?playerId=38651");
        ///data/player/list?teamId=
        ///data/player?playerId=
        ///data/record?playerId=
        setPlayerData(playerResponse.data);
        setKeeperData(keeperResponse.data);
        setDefenderData(defenderResponse.data);
        setMidfielderData(midfielderResponse.data);
        setAttackerData(attackerResponse.data);
        
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  // statInfo를 state로 설정하여, 데이터가 업데이트될 때마다 이를 반영합니다.
  const [statInfo, setStatInfo] = useState([]);

  // 데이터가 업데이트될 때마다 statInfo를 다시 설정합니다.
  useEffect(() => {
    const newStatInfo = [    ["포지션","선방","무실점경기","슈팅","파울","경고","퇴장","경기수"],  
      ["포지션", "득점","도움", "공격포인트", "슈팅","파울", "경고", "퇴장","패널티킥", "유효 슈팅", "경기수"],
      ...playerData.map((player, index) => {
        if (index === 0 || index === 1) {
          return [          player?.name,          "GK",          keeperData[index]?.saves,
            keeperData[index]?.goalConceded,
            keeperData[index]?.cleanSheet,
            keeperData[index]?.totalShots,
            keeperData[index]?.fouls,
            keeperData[index]?.yellowCards,
            keeperData[index]?.redCards,
            keeperData[index]?.penaltyGoals,
            keeperData[index]?.appearances,
          ];
        } else if(index>=2 && index<13 ) {
          return [          player?.name,          "DF",          defenderData[index-2]?.tackles,
            defenderData[index-2]?.interceptions,
            defenderData[index-2]?.clearances,
            defenderData[index-2]?.yellowCards,
            defenderData[index-2]?.redCards,
            defenderData[index-2]?.blockedShots,
            defenderData[index-2]?.totalContest,
            defenderData[index-2]?.totalDuelsWon,
            defenderData[index-2]?.aerialDuelsWon,
            defenderData[index-2]?.appearances,
          ];
        } else if(index>=13 && index<21 ) {
          return [          player?.name,          "MF",          midfielderData[index-2]?.goals,
          midfielderData[index-13]?.assists,
          midfielderData[index-13]?.yellowCards,
          midfielderData[index-13]?.redCards,
          midfielderData[index-13]?.totalPasses,
          midfielderData[index-13]?.accuratePasses,
          midfielderData[index-13]?.accurateCrosses,
          midfielderData[index-13]?.interceptions,
          midfielderData[index-13]?.touches,
          midfielderData[index-13]?.appearances,
          ];
        } else{
          return [          player?.name,          "FW",          attackerData[index-2]?.goals,
          attackerData[index-21]?.assists,
          attackerData[index-21]?.yellowCards,
          attackerData[index-21]?.redCards,
          attackerData[index-21]?.totalShots,
          attackerData[index-21]?.shotsOnTarget,
          attackerData[index-21]?.penaltyGoals,
          attackerData[index-21]?.touches,
          attackerData[index-21]?.successfulDribbles,
          attackerData[index-21]?.appearances,
          ];
        }
      }),
    ];
    
    setStatInfo(newStatInfo);
  }, [playerData, defenderData, midfielderData, attackerData, keeperData]); // playerData, outfieldData, keeperData가 변경될 때마다 이 effect를 실행합니다.
  const getValueOrLoading = (data, property) => {
    return data && data[property] ? data[property] : 'Loading...';
  }

  return (
    <ScrollView vertical={true}>
      <View style={{ flexDirection: "column" }}>
        <PlayerInfo statInfo={statInfo} getValueOrLoading={getValueOrLoading} />
      </View>
    </ScrollView>
  );
};

export default PlayerScreen;