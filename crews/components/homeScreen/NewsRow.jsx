import React, { useContext } from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "styled-components/native";
import Clock from "../../assets/icons/icon_clock.svg";
import People from "../../assets/icons/icon_people.svg";
import colors from "../../styles/colors";
import Han from "../../assets/news/news_han.jpg";
import Jeonbuk from "../../assets/news/news_jeonbukdomin.png";
import KBC from "../../assets/news/news_kbsguangju.jpg";
import Newsis from "../../assets/news/news_newsis.png";
import Newstoday from "../../assets/news/news_newstoday.jpg";
import XSports from "../../assets/news/news_xsportnews.png";

const NewsRow = ({order, title, time, press, url}) => {
  const theme = useContext(ThemeContext);

  const handlePress = () => {
    Linking.openURL(url);
  }

  const getImg = (uri) => {
    if (uri === '한겨레') {
      return Han;
    }
    else if (uri === '전북도민일보') {
      return Jeonbuk;
    }
    else if (uri === 'kbc광주방송') {
      return KBC;
    }
    else if (uri === '뉴시스') {
      return Newsis;
    }
    else if (uri === '뉴스투데이') {
      return Newstoday;
    }
    else if (uri === '엑스포츠뉴스') {
      return XSports;
    }
  }

  const formatEpochToDateString = (epoch) => {
    const ms = epoch * 1000;
    const date = new Date(ms);

    // 년, 월, 일 추출
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}년 ${month}월 ${day}일`;
  }

  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={newsRowStyle.base}>
      <Text style={[newsRowStyle.order, {color: theme.text}]}>{order}</Text>
      <View style={newsRowStyle.content}>
        <Text style={[newsRowStyle.contentTitle, {color: theme.text}]} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
        <View style={newsRowStyle.contentSub}>
            <Clock width={16} height={16}/>
            <Text style={newsRowStyle.contentSubText}>{formatEpochToDateString(time)}</Text>
        </View>
      </View>
      <Image style={newsRowStyle.img} source={getImg(press)}/>
    </View>
    </TouchableOpacity>
  );
};

export default NewsRow;

export const newsRowStyle = StyleSheet.create({
  base: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 13,
  },

  order: {
    width: 23,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 27,
    color: colors.black,
    marginRight: 12,
  },

  content: {
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  contentTitle: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    width: 200,
    color: colors.black,
    marginBottom: 4,
  },

  contentSub: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  contentSubText: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 18,
    color: colors.textGray,
    marginRight: 7,
    marginLeft: 2,
  },

  img: {
    width: 77,
    height: 40,
    borderRadius: 10,
  },
})

