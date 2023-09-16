import React from "react";
import { Text } from "react-native";
import { chartStyle } from "../../styles/homeScreen/chart";

const Chart = (props) => {
  return (
    <Text style={chartStyle.font}>{props.number}{"."}
      <Text style={props.number === "3" ? chartStyle.bold : ''}>{props.content}</Text>
    </Text>
  );
};

export default Chart;
