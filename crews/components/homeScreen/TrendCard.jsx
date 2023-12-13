import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Svg from "react-native-svg";
import colors from "../../styles/colors";
import Comment from '../../assets/icons/icon_comment.svg'
import CommentGray from '../../assets/icons/icon_comment_gray.svg'
import TimeLine from '../../assets/icons/icon_timeline.svg'
import TimeLineGray from '../../assets/icons/icon_timeline_gray.svg'
import { ThemeContext } from "styled-components/native";

const TrendCard = ({order, title, comment, watch, isCurrentCard}) => {
  const theme = useContext(ThemeContext);
  
  const dynamicStyle = {
    ...trendCardStyle.contentBox,
    backgroundColor: isCurrentCard ? theme.activeSubBackground : theme.inactiveSubBackground, // 현재 카드와 나머지 카드의 색상을 다르게 지정합니다.
  };
  const dynamicTitleStyle = {
    ...trendCardStyle.contentTitle,
    color: isCurrentCard ? theme.text : colors.textGray,
  }
  const dynamicTextStyle = {
    ...trendCardStyle.contentSubText,
    color: isCurrentCard ? theme.text : colors.textGray,
  }

  return (
    <View style={trendCardStyle.base}>
      <View style={dynamicStyle}>
        <Text style={dynamicTitleStyle}>{title}</Text>
        <View style={trendCardStyle.contentSub}>
          {
            isCurrentCard ? <TimeLine width={13} height={13} /> : <TimeLineGray width={13} height={13} />
          }
          <Text style={dynamicTextStyle}>{watch}회</Text>
          {
            isCurrentCard ? <Comment width={13} height={13} /> : <CommentGray width={13} height={13} />
          }
          <Text style={dynamicTextStyle} ellipsizeMode="tail" numberOfLines={1}>{comment.substring(0,6) + '..'}</Text>
        </View>
      </View>
      <View style={[trendCardStyle.order, {backgroundColor: theme.background}]}>
        <Text style={[trendCardStyle.orderText, {color: theme.text}]}>{order}</Text>
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