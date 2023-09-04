import React from 'react';
import { TextInput} from 'react-native';
import { Text, View} from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { useNicknameData } from '../../components/onboardingScreen/context';
import {commonStyle, profileStyle} from '../../styles/onboardingScreen/style'
import ProfileNextBtn from '../../components/onboardingScreen/ProfileNextBtn';
import { TouchableOpacity } from 'react-native';

const Profile = ({swiper, navigation}) => {

    const { enterNickname } = useNicknameData();
  
    const inputNickname = (nick) => {
      enterNickname(nick);
    }
  
    return(
      <View style = {{flex:1}}>
        <View style = {{alignItems: 'flex-start'}}>
          <TouchableOpacity 
          onPress={() => navigation.pop()}
          style = {{
            marginTop: 15,
            marginLeft: 10
          }}>
            <AntDesign 
            name="left" 
            size={24} 
            color="black"
            />
          </TouchableOpacity>
        </View>
        
        <View style = {{
          flex:4,
          alignItems: 'center',
          paddingTop: 25
        }}>
          
          <Text style = {[commonStyle.boldText]}>기본 정보를 등록해주세요</Text>
          <Text style = {[commonStyle.text]}>프로필 이미지는 이후 선택할</Text>
          <Text style = {[commonStyle.text]}>나의팀 이미지로 자동 등록됩니다</Text>
        </View>
        <View style = {{
          flex:15,
          alignItems: 'center',
          paddingTop: 10
        }}>
          <Image
            style = {[profileStyle.image]}
            source = {require('../../assets/onboarding/user.png')}
          />
          <View style = {{
            flexDirection: 'row'
          }}>
            <View style = {[profileStyle.textInputView]}>
              <TextInput 
                style = {{fontSize: 25, textAlign: 'center'}}
                onChangeText={(text) => {inputNickname(text)}}
                placeholder='크루즈회원'
              />
            </View>
            <Text style = {{fontSize: 25}}> 님</Text>
          </View>
        </View>
        <View style = {{
            alignItems: 'center',
            marginBottom: 10
        }}>
            <ProfileNextBtn 
                onPress = {() => swiper.current.scrollBy(1, true)}
                message = '닉네임을 입력해주세요'
            />
        </View>
      </View>
    )
}

export default Profile;