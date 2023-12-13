import React, {useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Text, View, StyleSheet, ScrollView,Image } from "react-native";
import KeywordBar from "./KeywordBar";
import { ThemeContext } from "styled-components/native";


const Keyword = () => {
    const [teamTrend, setTrend] = useState([]);
    const theme = useContext(ThemeContext);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("https://crews.jongmin.xyz/data/trend?teamId=1234"); // 실제 API URL로 대체
          setTrend(response.data);
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