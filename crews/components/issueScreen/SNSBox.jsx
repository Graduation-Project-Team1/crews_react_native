import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Twitter from "../../assets/icons/icon_brand_twitter.svg";
import Instagram from "../../assets/icons/icon_brand_instagram.svg";
import Reddit from "../../assets/icons/icon_brand_reddit.svg";
import Like from "../../assets/icons/icon_like.svg";
import colors from "../../styles/colors";
import { ThemeContext } from "styled-components/native";

const SNSBox = ({sns, nickname, id, content, time, like}) => {
  const theme = useContext(ThemeContext);
  const baseStyle = snsBaseStyle(sns);

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
    <View style={baseStyle}>
      <View style={snsBoxStyle.header}>
        <View>
          <Text style={[snsBoxStyle.nickname, {
            color: theme.text,
          }]}>{nickname ? nickname : 'nickname'}</Text>
          <Text style={snsBoxStyle.id}>@{id}</Text>
        </View>
        {
          sns === 'twitter' ? // 트위터
            <Twitter width={25} height={25}/> : sns === 'instagram' ?  // 인스타그램
              <Instagram width={25} height={25}/> : sns === 'reddit' ?  // 레딧
                <Reddit width={25} height={25}/> : null
        }
      </View>
      <Text style={[snsBoxStyle.content, { color: theme.text }]} ellipsizeMode="tail" numberOfLines={5}>{content}</Text>
      <View style={snsBoxStyle.footer}>
        <View style={snsBoxStyle.like}>
          <Like width={16} height={16}/>
          <Text style={snsBoxStyle.footerText}>{like}</Text>
        </View>
        <Text style={snsBoxStyle.footerText}>{formatEpochToDateString(time)}</Text>
      </View>
    </View>
  );
};

export default SNSBox;

export const snsBaseStyle = (sns) => {
  return StyleSheet.create({
    width: "100%",
    height: 182,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: sns === 'twitter' ? colors.twitter : sns === 'instagram' ? colors.instagram : sns === 'reddit' ? colors.reddit : colors.black,
    backgroundColor: colors.transparent,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 20,
  });
}

export const snsBoxStyle = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  nickname: {
    fontSize: 13,
    fontWeight: 600,
    color: colors.black,
  },

  id: {
    fontSize: 13,
    fontWeight: 400,
    color: colors.textGray,
  },

  content: {
    width: '100%',
    height: 80,
    fontSize: 13,
    fontWeight: 400,
    color: colors.black,
    overflow: 'hidden',
  },

  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  like: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 4,
  },

  footerText: {
    fontSize: 13,
    fontWeight: 400,
    color: colors.textGray,
  },
});