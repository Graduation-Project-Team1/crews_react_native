import React from "react";
import { View } from "react-native";
import Chart from "./Chart";

const ChartList = () => {
  return (
    <View>
      <Chart number={"1"} content={"어쩌구FC"}/>
      <Chart number={"2"} content={"어쩌구FC"}/>
      <Chart number={"3"} content={"전북현대"}/>
      <Chart number={"4"} content={"어쩌구FC"}/>
      <Chart number={"5"} content={"어쩌구FC"}/>
    </View>
  );
};

export default ChartList;
