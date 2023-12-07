import React from "react";
import { Text, View } from "react-native";

import { profileStyles } from "../../styles/settingScreen/styles";

const ProfileView = (props) => {
    return (
        <View style = {profileStyles.view}>
            <View style = {profileStyles.ImageView}>
                <View style = {profileStyles.profileImg}/>
                <View style = {profileStyles.platformImg}/>
            </View>
            <View style = {profileStyles.textView}>
                <Text style = {profileStyles.nickname}>{props.nickName}</Text>
                <Text style = {profileStyles.platformName}>카카오</Text>
            </View>
        </View>
    )
}

export default ProfileView;