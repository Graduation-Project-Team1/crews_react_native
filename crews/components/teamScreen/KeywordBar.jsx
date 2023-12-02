import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import KeywordBox from "./KeywordBox";
import KeywordName from "./KeywordName";

const KeywordBar = () => {
  const [selectedBar, setSelectedBar] = useState(0); // 초기값 0으로 설정

  const handleBarClick = (barIndex) => {
    setSelectedBar(barIndex);
  };

  const bars = [
    { backgroundColor: "#224F85", height: 120, marginTop: 0 },
    { backgroundColor: "#FFC300", height: 100, marginTop: 0 },
    { backgroundColor: "#125A37", height: 60, marginTop: 20 },
    { backgroundColor: "#D6E3FF", height: 40, marginTop: 20 },
    { backgroundColor: "#FBEEAC", height: 20, marginTop: 20 },
  ];

  // rank, mentions, mood 데이터 배열을 생성
  const ranks = [1, 2, 3, 4, 5];
  const mentions = [153, 130, 100, 110, 120];
  const moods = ["긍정적", "긍정적", "긍정적", "부정적", "부정적"];

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {bars.map((bar, index) => {
          const adjustedBackgroundColor =
            selectedBar !== null && selectedBar !== index
              ? `${bar.backgroundColor}77`
              : bar.backgroundColor;

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleBarClick(index)}
              activeOpacity={0.7}
            >
              <Text
                style={{
                  marginTop: 50 + index * 20,
                  marginLeft: 5,
                  marginBottom: 5,
                }}
              >
                {index + 1}
              </Text>
              <View
                style={{
                  borderTopLeftRadius: 5,
                  borderTopRightRadius: 5,
                  height: bar.height,
                  width: 20,
                  backgroundColor: adjustedBackgroundColor,
                  marginTop: bar.marginTop,
                }}
              ></View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ height: 1, backgroundColor: "#CAC4D0" }} />
      <KeywordName />
      <View>
        {selectedBar !== null && (
          <KeywordBox
            rank={ranks[selectedBar]}
            mentions={mentions[selectedBar]}
            mood={moods[selectedBar]}
          />
        )}
      </View>
    </View>
  );
};

export default KeywordBar;
