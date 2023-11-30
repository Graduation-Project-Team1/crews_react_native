import React, {useRef} from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, Button } from 'react-native';
import  Swiper  from 'react-native-swiper';
import { AntDesign } from '@expo/vector-icons';
import { commonStyle, swiperStyle, } from '../../styles/onboardingScreen/style';
import colors from '../../styles/colors';

import { TeamDataProvider, NicknameDataProvider, MemberDataProvider } from '../../components/onboardingScreen/context';

import Profile from './ProfileScreen';
import MyMember from './MyMemberScreen';
import Check from './CheckScreen';
import MyTeam from './MyTeamScreen';
import Theme from './ThemeScreen';


const OnboardingScreen = ({navigation}) => {

    const swiper = useRef(null);

    return (
        <TeamDataProvider>
        <NicknameDataProvider>
        <MemberDataProvider>
            <View style = {{
            flex: 1,
            backgroundColor: '#ffffff',
            marginTop: 25
            }}>
            <Swiper 
                style={[commonStyle.alignment]} 
                buttonWrapperStyle={{alignItems: 'flex-start', flex:1, flexDirection:'column', top: 5, bottom: 10}} 
                showsButtons={true} 
                loop = {false}
                ref={swiper}
                paginationStyle={{bottom: undefined,  top:20, justifyContent: 'center' }}
                prevButton = {
                        <AntDesign 
                        name="left" 
                        size={24} 
                        color={colors.iconGray}
                        style = {{position: 'absolute'}}
                        />
                }
                nextButton = {<View/>}
                dotColor='#D9D9D980'
                activeDotColor={colors.primary}
                activeDotStyle = {{width: 18}}
                >
                <Profile swiper={swiper} navigation={navigation}/>
                <MyTeam swiper={swiper}/>
                <MyMember swiper={swiper}/>
                <Theme swiper={swiper}/>
                <Check/>
                
            </Swiper>
            </View>
        </MemberDataProvider>
        </NicknameDataProvider>
        </TeamDataProvider>
    )
}

export default OnboardingScreen;