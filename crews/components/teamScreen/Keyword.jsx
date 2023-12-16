import React, {useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import KeywordBar from "./KeywordBar";
import { ThemeContext } from "styled-components/native";
import { useRecoilValue } from "recoil";
import { userTeamState } from "../../recoil/teamState";


const Keyword = () => {
    const userTeam = useRecoilValue(userTeamState);
    const [teamTrend, setTrend] = useState([]);
    const theme = useContext(ThemeContext);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://crews.jongmin.xyz/data/trend?teamId=${userTeam.id}`)
          .then((response) => {
            console.log("getKeyword: 성공");
            setTrend(response.data);
          })
          .catch((error) => {
              console.log("error: ", error);
          })
        } catch (error) {
          console.error('데이터를 가져오는 중 오류 발생:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <View>
        <Text style={{fontWeight:'900', marginLeft:10,marginTop:60,fontSize:18,color:theme.text}}>팀 트렌드 분석</Text>
        <KeywordBar teamTrend={teamTrend} />
      </View>
    );
  };

export default Keyword;