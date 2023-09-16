import React from "react";
import { Text, View, Image } from "react-native";
import { newsStyle } from "../../styles/homeScreen/news";

const News = (props) => {
  return (
    <View style={newsStyle.layout}>
      <Image
        style={newsStyle.image}
        source={{
          uri: props.uri
        }}/>
      <Text style={newsStyle.title}>{props.title}</Text>
      <Text style={newsStyle.writer}>{props.writer}</Text>
    </View>
  );
};

export default News;
