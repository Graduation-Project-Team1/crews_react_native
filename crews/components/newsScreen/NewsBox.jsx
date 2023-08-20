import React from "react";
import { Image, Text, View } from "react-native";
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { communityBoxStyles, newsBoxStyles } from "../../styles/newsScreen/newsScreenStyles";

const NewsBox = ({rank, title, time, view, news}) => {
  return (
    <View style={newsBoxStyles.area}>
      <Text style={newsBoxStyles.rank}>{rank}</Text>
      <View style={newsBoxStyles.body}>
        <Text>{title}</Text>
        <View style={newsBoxStyles.subView}>
          <FontAwesomeIcon icon={faClock} size={16} style={newsBoxStyles.subIcon}/>
          <Text style={newsBoxStyles.subText}>{time}</Text>
          <FontAwesomeIcon icon={faUserGroup} size={16} style={newsBoxStyles.subIcon}/>
          <Text style={newsBoxStyles.subText}>{view}</Text>
        </View>
      </View>
      <Image source={{uri: news}} style={newsBoxStyles.img}/>
    </View>
  );
};

export default NewsBox;
