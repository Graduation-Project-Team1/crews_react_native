import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import colors from "../../styles/colors";
import { setColors, styles } from "../../styles/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { topContentsStyles } from "../../styles/homeScreen/topContents";

const TopContents = () => {
  return (
    <View style={[styles.container, topContentsStyles.topContentLayout]}>
      <View style={[topContentsStyles.topContentLeft]}>
        <Text style={[topContentsStyles.topContentText]}>
          오늘의{" "}
          <Text style={{fontWeight: 700}}>전북현대</Text>
        </Text>
        <Text style={[topContentsStyles.topContentText]}>
          트렌드 순위 3위{"\n"}
          최근 경기 : FC서울 1:0 승
        </Text>
        <Text style={[topContentsStyles.topContentText]} numberOfLines={2} ellipsizeMode="tail">
          지난밤 FC서울과의 경리에서 승리하고 백승호가 활약하였으며 어쩌구저쩌구어쩌구저쩌구
        </Text>
      </View>
      <View style={[topContentsStyles.topContentRight]}>
        <Image
          style={topContentsStyles.topContentImageBlack}
          source={{
            uri: 'https://yt3.googleusercontent.com/LoJX3yKY2JEnaTdlb4Era-RJcj6GO7zwl2AQ_aEn1UADu7qOwXmuEzuopqOsT43hKhbb1piQmw=s900-c-k-c0x00ffffff-no-rj'
          }}
        />
        <Image
          style={topContentsStyles.topContentImage}
          source={{
            uri: 'https://yt3.googleusercontent.com/LoJX3yKY2JEnaTdlb4Era-RJcj6GO7zwl2AQ_aEn1UADu7qOwXmuEzuopqOsT43hKhbb1piQmw=s900-c-k-c0x00ffffff-no-rj'
          }}
        />
        <FontAwesomeIcon 
          style={topContentsStyles.topContentPlay}
          icon={faPlay}
          size={30}
        />
      </View>
    </View>
  );
};

export default TopContents;
