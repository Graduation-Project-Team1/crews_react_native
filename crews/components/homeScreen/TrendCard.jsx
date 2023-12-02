import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg from "react-native-svg";
import colors from "../../styles/colors";
import TimeLine from '../../assets/icons/icon_timeline.svg'
import TimeLineGray from '../../assets/icons/icon_timeline_gray.svg'
import UpDown from '../../assets/icons/icon_up_down.svg'
import UpDownGray from '../../assets/icons/icon_up_down_gray.svg'

const TrendCard = ({order, title, chart, watch, isCurrentCard}) => {
  
  const dynamicStyle = {
    ...trendCardStyle.contentBox,
    backgroundColor: isCurrentCard ? colors.primaryLight : '#EFF4FF', // 현재 카드와 나머지 카드의 색상을 다르게 지정합니다.
  };
  const dynamicTitleStyle = {
    ...trendCardStyle.contentTitle,
    color: isCurrentCard ? colors.primary : colors.textGray,
  }
  const dynamicTextStyle = {
    ...trendCardStyle.contentSubText,
    color: isCurrentCard ? colors.black : colors.textGray,
  }

  return (
    <View style={trendCardStyle.base}>
      <View style={dynamicStyle}>
        <Text style={dynamicTitleStyle}>{title}</Text>
        <View style={trendCardStyle.contentSub}>
          {
            isCurrentCard ? <UpDown width={13} height={13} /> : <UpDownGray width={13} height={13} />
          }
          <Text style={dynamicTextStyle}>{ chart > 0 ? chart + "위 상승" : chart * -1 + "위 하락"}</Text>
          {
            isCurrentCard ? <TimeLine width={13} height={13} /> : <TimeLineGray width={13} height={13} />
          }
          <Text style={dynamicTextStyle}>{watch}회</Text>
        </View>
      </View>
      <View style={trendCardStyle.order}>
        <Text style={trendCardStyle.orderText}>{order}</Text>
      </View>
    </View>
  );
};

export default TrendCard;

export const trendCardStyle = StyleSheet.create({
  base: {
    width: 168,
    height: 80,
    position: "relative",
  },

  order: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 27,
    height: 27,
    borderRadius: 50,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  
  orderText: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 27,
    color: colors.black,
  },

  contentBox: {
    width: 157,
    height: 69,
    backgroundColor: colors.primaryLight,
    borderRadius: 13,
    position: "absolute",
    bottom: 0,
    right: 0,
    flexDirection: "column",
    paddingStart: 22,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  contentTitle: {
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 21,
    color: colors.primary,
    marginBottom: 5,
  },

  contentSub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  contentSubText: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    color: colors.black,
    marginLeft: 2,
    marginRight: 10,
  },
});