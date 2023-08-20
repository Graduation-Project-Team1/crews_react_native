import React from "react";
import { Image, View, Text } from "react-native";
import { communityBoxStyles } from "../../styles/newsScreen/newsScreenStyles";

const CommunityBox = ({community, title, writer}) => {
  const communityImg = () => {
    switch (community) {
      case 'dcinside':
        return <Image source={require('../../assets/community/community-dcinside.png')}  style={communityBoxStyles.imgArea}/>
      case 'mlbpark':
        return <Image source={require('../../assets/community/community-mlbPark.png')}  style={communityBoxStyles.imgArea}/>
      case 'facebook':
        return <Image source={require('../../assets/community/community-facebook.png')}  style={communityBoxStyles.imgArea}/>
      default:
        break;
    }
  }
  return (
    <View style={communityBoxStyles.area}>
      {communityImg()}
      <Text style={communityBoxStyles.title}>{title}</Text>
      <Text style={communityBoxStyles.writer}>{writer}</Text>
    </View>
  );
};

export default CommunityBox;
