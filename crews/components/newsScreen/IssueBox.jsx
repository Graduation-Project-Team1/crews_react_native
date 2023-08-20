import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, Text, View } from "react-native";
import { faTwitter, faInstagram, faRedditAlien } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { setColors } from "../../styles/styles";
import { issueBoxFooterStyles, issueBoxHeaderStyles, newsScreenStyles } from "../../styles/newsScreen/newsScreenStyles";

const IssueBox = ({name, id, content, like, time, brand}) => {
  const brandIcon = () => {
    switch (brand) {
      case 'twitter':
        return <FontAwesomeIcon style={setColors.twitter} icon={faTwitter} size={25} />
      case 'instagram':
        return <FontAwesomeIcon style={setColors.instagram} icon={faInstagram} size={25} />
      case 'reddit':
        return <FontAwesomeIcon style={setColors.reddit} icon={faRedditAlien} size={25} />
      default:
        return <FontAwesomeIcon style={setColors.twitter} icon={faTwitter} size={25} />
    }
  }
  return (
    <View style={newsScreenStyles.issueBoxArea}>
      <View style={issueBoxHeaderStyles.area}>
        <View>
          <Text style={issueBoxHeaderStyles.name}>{name}</Text>
          <Text style={issueBoxHeaderStyles.id}>@{id}</Text>
        </View>
        {brandIcon()}
      </View>
      <Text style={newsScreenStyles.issueBoxBodyArea}>
        {content}
      </Text>
      <View style={issueBoxFooterStyles.area}>
        <View style={issueBoxFooterStyles.left}>
          <FontAwesomeIcon style={setColors.textGray} icon={faHeart} size={15} />
          <Text style={issueBoxFooterStyles.likeText}>{like}</Text>
        </View>
        <Text style={issueBoxFooterStyles.right}>{time}</Text>
      </View>
    </View>
  );
};

export default IssueBox;
