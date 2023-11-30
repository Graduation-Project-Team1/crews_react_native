/*
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const PlayerList = () => {
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    // API 엔드포인트에서 데이터 가져오기
    axios.get("http://crews.jongmin.xyz:8080/data/player/list?teamId=7653")
      .then((response) => {
        // 데이터를 state에 설정
        setPlayerData(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []); // 빈 배열을 전달하여 componentDidMount와 같은 효과를 얻습니다.
  

  const renderItem = ({ item }) => {
    return (
      
      <View style={styles.playerItem}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text>나이: {item.age}세</Text>
        <Text>생년월일: {item.dateOfBirth.split('T')[0]}</Text>
        <Text>키: {item.height}cm</Text>
        <Text>등번호: {item.shirtNumber}</Text>
        <Text>포지션: {item.position}</Text>
        <Text>국적: {item.nation}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={playerData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  playerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayerList;
*/